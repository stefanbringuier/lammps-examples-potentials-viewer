import { exampleEntries } from "./examples.js"
import { potentialEntries } from "./potentials.js"

export interface Example {
    id: string
    name: string
    category: string
    description: string
    path: string
    files: string[]
    keywords: string[]
    gitHubUrl: string
}

export interface Potential {
    id: string
    name: string
    type: string
    description: string
    path: string | string[]
    files?: string[]
    keywords: string[]
    elements: string[]
    gitHubUrl: string
}

export const examples: Example[] = exampleEntries.filter(
    (entry): entry is Example => "path" in entry && entry.path.startsWith("examples/"),
)

export const potentials: Potential[] = potentialEntries.filter(
    (entry) => "path" in entry &&
        (typeof entry.path === "string"
            ? entry.path === "potentials" || entry.path.startsWith("potentials/")
            : entry.path[0]?.startsWith("potentials/")),
) as Potential[]