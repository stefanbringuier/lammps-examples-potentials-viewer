"use client"

import type React from "react"
import { useState, useMemo, useEffect } from "react"
import { Search, Download, Grid, List, X, Link2, Eye } from "lucide-react"
import Fuse from "fuse.js"
import { examples, potentials, type Example, type Potential } from "@/data/entries"
import CodeViewer from "@/components/code-viewer"

const BASE_GITHUB_URL = "https://github.com/lammps/lammps/tree/stable"

const SearchInterface: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState<"examples" | "potentials">("examples")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showAllKeywords, setShowAllKeywords] = useState(false)

  const [viewableFiles, setViewableFiles] = useState<{ name: string; url: string }[]>([])
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const examplesFuse = useMemo(() => {
    return new Fuse(examples, {
      keys: [
        { name: "name", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "keywords", weight: 0.25 },
        { name: "category", weight: 0.15 },
        { name: "files", weight: 0.1 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
    })
  }, [])

  const potentialsFuse = useMemo(() => {
    return new Fuse(potentials, {
      keys: [
        { name: "name", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "keywords", weight: 0.2 },
        { name: "type", weight: 0.15 },
        { name: "elements", weight: 0.15 },
      ],
      threshold: 0.4,
      includeScore: true,
      ignoreLocation: true,
    })
  }, [])

  const exampleCategories = useMemo(() => Array.from(new Set(examples.map((ex) => ex.category))).sort(), [])
  const potentialTypes = useMemo(() => Array.from(new Set(potentials.map((pot) => pot.type))).sort(), [])

  const availableKeywords = useMemo(() => {
    const data = activeTab === "examples" ? examples : potentials
    const itemsToConsider =
      selectedCategories.length > 0
        ? data.filter((item) => {
          const itemCategory = "category" in item ? item.category : item.type
          return selectedCategories.includes(itemCategory)
        })
        : data

    const allKeywords = itemsToConsider.flatMap((item) => item.keywords)
    const keywordFrequencies = allKeywords.reduce(
      (acc, keyword) => {
        acc[keyword] = (acc[keyword] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(keywordFrequencies)
      .sort(([, a], [, b]) => b - a)
      .map(([keyword]) => keyword)
  }, [activeTab, selectedCategories])

  useEffect(() => {
    setShowAllKeywords(false)
  }, [availableKeywords])

  const filteredResults = useMemo(() => {
    const data = activeTab === "examples" ? examples : potentials
    const fuse = activeTab === "examples" ? examplesFuse : potentialsFuse

    let results = searchTerm ? fuse.search(searchTerm).map((result) => result.item) : data

    if (selectedCategories.length > 0) {
      results = results.filter((item) =>
        selectedCategories.includes(activeTab === "examples" ? (item as Example).category : (item as Potential).type),
      )
    }

    if (selectedKeywords.length > 0) {
      results = results.filter((item) => selectedKeywords.some((keyword) => item.keywords.includes(keyword)))
    }

    return results
  }, [searchTerm, activeTab, selectedCategories, selectedKeywords, examplesFuse, potentialsFuse])

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const handleKeywordToggle = (keyword: string) => {
    setSelectedKeywords((prev) => (prev.includes(keyword) ? prev.filter((k) => k !== keyword) : [...prev, keyword]))
  }

  // Update the handleDownload function to handle both individual files and file groups
  const handleDownload = (item: Example | Potential) => {
    const isExample = "category" in item

    if (isExample) {
      // Handle examples (existing logic)
      window.open(`https://download-directory.github.io/?url=${item.gitHubUrl}`, "_blank")
    } else {
      // Handle potentials
      const potential = item as Potential

      if (potential.files && potential.files.length > 1) {
        // Multiple files - download individually with staggered timing
        potential.files.forEach((fileName, index) => {
          setTimeout(() => {
            const link = document.createElement("a")
            link.href = `https://raw.githubusercontent.com/lammps/lammps/stable/${potential.path}/${fileName}`
            link.setAttribute("download", fileName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }, index * 500) // Stagger downloads by 500ms
        })
      } else {
        // Single file
        const fileName = potential.files?.[0] || potential.name
        const rawUrl = `https://raw.githubusercontent.com/lammps/lammps/stable/${potential.path}/${fileName}`
        const link = document.createElement("a")
        link.href = rawUrl
        link.setAttribute("download", fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  // Update the handleView function to handle potential file groups
  const handleView = (item: Example | Potential) => {
    const isExample = "category" in item
    let filesToView: { name: string; url: string }[] = []

    if (isExample) {
      // Handle examples - get all files that are likely viewable
      const example = item as Example
      const isPackage = example.path.includes("PACKAGES")

      if (isPackage) {
        // For PACKAGES, be more inclusive - include most files except obvious non-text files
        filesToView = example.files
          .filter((file) => {
            // Exclude obvious non-text files
            const excludedExtensions = ['.gz', '.zip', '.tar', '.bz2', '.7z', '.rar']
            const hasExcludedExtension = excludedExtensions.some(ext => file.endsWith(ext))
            return !hasExcludedExtension
          })
          .map((file) => ({
            name: file,
            url: `https://raw.githubusercontent.com/lammps/lammps/stable/${example.path}/${file}`,
          }))
      } else {
        // For regular examples, keep the original filtering
        filesToView = example.files
          .filter((file) => file.startsWith("in.") || file.startsWith("data."))
          .map((file) => ({
            name: file,
            url: `https://raw.githubusercontent.com/lammps/lammps/stable/${example.path}/${file}`,
          }))
      }
    } else {
      // Handle potentials
      const potential = item as Potential
      if (potential.files && potential.files.length > 1) {
        // Multiple files - create URLs for each file
        filesToView = potential.files.map((fileName) => ({
          name: fileName,
          url: `https://raw.githubusercontent.com/lammps/lammps/stable/${potential.path}/${fileName}`,
        }))
      } else {
        // Single file
        filesToView = [
          {
            name: potential.files?.[0] || potential.name,
            url: `https://raw.githubusercontent.com/lammps/lammps/stable/${potential.path}/${potential.files?.[0] || potential.name}`,
          },
        ]
      }
    }

    if (filesToView.length > 0) {
      setViewableFiles(filesToView)
      setIsViewerOpen(true)
    } else {
      alert("No viewable files found for this item.")
    }
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedKeywords([])
    setSearchTerm("")
  }

  const renderItem = (item: Example | Potential) => {
    const isExample = "category" in item
    const props = {
      item,
      isExample,
      onDownload: () => handleDownload(item),
      onView: () => handleView(item),
    }
    return viewMode === "grid" ? <GridItem key={item.id} {...props} /> : <ListItem key={item.id} {...props} />
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">L</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">LAMMPS Examples & Potentials Text Viewer</h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Browse and view examples and potential files from the{" "}
                  <a
                    href="https://github.com/lammps/lammps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LAMMPS GitHub repository
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-500 hidden sm:block">
                {filteredResults.length} {activeTab} found
              </p>
              <button
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                aria-label={`Switch to ${viewMode === "grid" ? "list" : "grid"} view`}
              >
                {viewMode === "grid" ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {activeTab === "examples" ? "Categories" : "Types"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(activeTab === "examples" ? exampleCategories : potentialTypes).map((item) => (
                  <button
                    key={item}
                    onClick={() => handleCategoryToggle(item)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors border ${selectedCategories.includes(item)
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {(showAllKeywords ? availableKeywords : availableKeywords.slice(0, 25)).map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => handleKeywordToggle(keyword)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors border ${selectedKeywords.includes(keyword)
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
                      }`}
                  >
                    {keyword}
                  </button>
                ))}
              </div>
              {availableKeywords.length > 25 && (
                <button
                  onClick={() => setShowAllKeywords(!showAllKeywords)}
                  className="text-sm text-blue-600 hover:underline mt-4 font-medium"
                >
                  {showAllKeywords ? "Show less" : `Show ${availableKeywords.length - 25} more...`}
                </button>
              )}
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, description, keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex bg-gray-100 p-1 rounded-lg">
                {["examples", "potentials"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab as "examples" | "potentials")
                      clearAllFilters()
                    }}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)} (
                    {tab === "examples" ? examples.length : potentials.length})
                  </button>
                ))}
              </div>
              {(selectedCategories.length > 0 || selectedKeywords.length > 0 || searchTerm) && (
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center px-3 py-1.5 bg-transparent text-gray-600 text-sm rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </button>
              )}
            </div>

            {filteredResults.length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-lg">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">No results found</h3>
                <p className="text-gray-500">Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
                {filteredResults.map(renderItem)}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50/50 mt-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              Curated by{" "}
              <a href="https://github.com/stefanbringuier" className="text-gray-800 hover:underline font-medium">
                S. Bringuier
              </a>{" "}
              and{" "}
              <a href="https://v0.dev" className="text-gray-800 hover:underline font-medium">
                Vercel v0
              </a>
            </div>
            <div className="text-sm text-gray-500">
              Licensed under{" "}
              <a
                href="https://github.com/sbringuier/lammps-examples-potentials-viewer/blob/main/LICENSE"
                className="text-gray-700 hover:underline"
              >
                GNU GPL v2
              </a>
            </div>
          </div>
        </div>
      </footer>

      {isViewerOpen && <CodeViewer files={viewableFiles} onClose={() => setIsViewerOpen(false)} />}
    </div>
  )
}

type ItemProps = {
  item: Example | Potential
  isExample: boolean
  onView: () => void
  onDownload: () => void
}

// Update the GridItem component to show file information
const GridItem: React.FC<ItemProps> = ({ item, isExample, onView, onDownload }) => {
  const potential = !isExample ? (item as Potential) : null
  const fileCount = potential && potential.files ? potential.files.length : 1

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col justify-between hover:shadow-md hover:border-gray-300 transition-all duration-200">
      <div>
        <div className="flex justify-between items-start gap-3 mb-2">
          <h3 className="text-base font-semibold text-gray-900 leading-tight">{item.name}</h3>
          <div className="flex flex-col items-end gap-1">
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${isExample ? "bg-gray-100 text-gray-800" : "bg-gray-100 text-gray-800"
                }`}
            >
              {isExample ? (item as Example).category : (item as Potential).type}
            </span>
            {!isExample && fileCount > 1 && (
              <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">{fileCount} files</span>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {item.keywords.slice(0, 4).map((keyword) => (
            <span key={keyword} className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
        <button
          onClick={onView}
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Eye className="w-4 h-4 mr-1.5" /> View
        </button>
        <a
          href={item.gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Link2 className="w-4 h-4 mr-1.5" /> Link
        </a>
        <button
          onClick={onDownload}
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-white bg-gray-900 border border-gray-900 rounded-md hover:bg-gray-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-1.5" /> Download
        </button>
      </div>
    </div>
  )
}

// Update the ListItem component similarly
const ListItem: React.FC<ItemProps> = ({ item, isExample, onView, onDownload }) => {
  const potential = !isExample ? (item as Potential) : null
  const fileCount = potential && potential.files ? potential.files.length : 1

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:shadow-md hover:border-gray-300 transition-all duration-200">
      <div className="flex-1 pr-6">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${isExample ? "bg-gray-100 text-gray-800" : "bg-gray-100 text-gray-800"
              }`}
          >
            {isExample ? (item as Example).category : (item as Potential).type}
          </span>
          {!isExample && fileCount > 1 && (
            <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">{fileCount} files</span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
        <div className="flex flex-wrap gap-1">
          {item.keywords.slice(0, 5).map((keyword) => (
            <span key={keyword} className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={onView}
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Eye className="w-4 h-4 mr-1.5" /> View
        </button>
        <a
          href={item.gitHubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Link2 className="w-4 h-4 mr-1.5" /> Link
        </a>
        <button
          onClick={onDownload}
          className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium text-white bg-gray-900 border border-gray-900 rounded-md hover:bg-gray-700 transition-colors"
        >
          <Download className="w-4 h-4 mr-1.5" /> Download
        </button>
      </div>
    </div>
  )
}

// Ensure the export statement is at the top level
const App = SearchInterface
export default App
