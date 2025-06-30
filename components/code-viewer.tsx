"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Copy, Check, Loader, AlertTriangle } from "lucide-react"
import { highlightLAMMPS } from "@/lib/lammps-highlighter"

interface CodeViewerProps {
  files: { name: string; url: string }[]
  onClose: () => void
}

type FileContent = {
  loading: boolean
  content: string | null
  error: string | null
}

const CodeViewer: React.FC<CodeViewerProps> = ({ files, onClose }) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0)
  const [fileContents, setFileContents] = useState<Record<number, FileContent>>({})
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const fetchContent = async (index: number) => {
      if (!files[index] || fileContents[index]?.content || fileContents[index]?.loading) return

      setFileContents((prev) => ({
        ...prev,
        [index]: { loading: true, content: null, error: null },
      }))

      try {
        const response = await fetch(files[index].url)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`)
        }
        const text = await response.text()
        setFileContents((prev) => ({
          ...prev,
          [index]: { loading: false, content: text, error: null },
        }))
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
        setFileContents((prev) => ({
          ...prev,
          [index]: { loading: false, content: null, error: errorMessage },
        }))
      }
    }

    fetchContent(activeFileIndex)
  }, [activeFileIndex, files, fileContents])

  const handleCopy = () => {
    const content = fileContents[activeFileIndex]?.content
    if (content) {
      navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const activeContent = fileContents[activeFileIndex]
  const activeFile = files[activeFileIndex]

  // Determine if file should be syntax highlighted
  const isLAMMPSFile =
    activeFile &&
    (activeFile.name.startsWith("in.") ||
      activeFile.name.endsWith(".lmp") ||
      activeFile.name.includes("lammps") ||
      // Check for potential files that might contain LAMMPS-like syntax
      (activeFile.name.includes(".") && !activeFile.name.endsWith(".gz")))

  const renderContent = () => {
    if (!activeContent?.content) return null

    if (isLAMMPSFile) {
      // Apply LAMMPS syntax highlighting
      const highlightedCode = highlightLAMMPS(activeContent.content)
      return (
        <pre className="font-mono text-sm p-6 overflow-auto h-full text-gray-800 leading-relaxed whitespace-pre-wrap">
          <code className="lammps-code" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      )
    } else {
      // Plain text for non-LAMMPS files
      return (
        <pre className="font-mono text-sm p-6 overflow-auto h-full text-gray-800 leading-relaxed whitespace-pre-wrap">
          <code>{activeContent.content}</code>
        </pre>
      )
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-2">
            {files.length > 1 ? (
              <div className="flex items-center bg-gray-100 rounded-md p-1 max-w-2xl overflow-x-auto">
                {files.map((file, index) => (
                  <button
                    key={file.name}
                    onClick={() => setActiveFileIndex(index)}
                    className={`px-3 py-1 text-sm font-medium rounded whitespace-nowrap ${
                      activeFileIndex === index ? "bg-white shadow-sm text-gray-800" : "text-gray-600 hover:bg-white/50"
                    }`}
                  >
                    {file.name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-gray-800">{files[0].name}</h2>
                {isLAMMPSFile && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">LAMMPS</span>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {activeContent?.content && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-md px-3 py-1.5 text-sm text-gray-700 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            )}
            <button onClick={onClose} className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        <main className="flex-grow bg-gray-50/30 overflow-hidden relative">
          {activeContent?.loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <div className="flex flex-col items-center gap-3">
                <Loader className="w-8 h-8 text-gray-400 animate-spin" />
                <p className="text-sm text-gray-500">Loading file...</p>
              </div>
            </div>
          )}

          {activeContent?.error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
              <AlertTriangle className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-red-600 mb-2">Error loading file</h3>
              <p className="text-sm text-gray-500 max-w-md">{activeContent.error}</p>
              <p className="text-xs text-gray-400 mt-2">
                The file might be too large or not accessible from this domain.
              </p>
            </div>
          )}

          {activeContent?.content && <div className="h-full overflow-auto">{renderContent()}</div>}
        </main>
      </div>
    </div>
  )
}

export default CodeViewer
