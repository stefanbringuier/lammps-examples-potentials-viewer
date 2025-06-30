// LAMMPS Syntax Highlighter
// Based on pygments_lammps.lammps lexer

export interface Token {
  type: string
  value: string
  start: number
  end: number
}

const LAMMPS_COMMANDS = [
  "angle_coeff",
  "angle_style",
  "atom_modify",
  "atom_style",
  "angle_write",
  "balance",
  "bond_coeff",
  "bond_style",
  "bond_write",
  "boundary",
  "clear",
  "comm_modify",
  "comm_style",
  "compute_modify",
  "create_atoms",
  "create_bonds",
  "create_box",
  "delete_atoms",
  "delete_bonds",
  "dielectric",
  "dihedral_coeff",
  "dihedral_style",
  "dihedral_write",
  "dimension",
  "displace_atoms",
  "dump_modify",
  "dynamical_matrix",
  "echo",
  "fitpod",
  "fix_modify",
  "group2ndx",
  "hyper",
  "improper_coeff",
  "improper_style",
  "include",
  "info",
  "jump",
  "kim",
  "kspace_modify",
  "kspace_style",
  "label",
  "labelmap",
  "lattice",
  "log",
  "mass",
  "mdi",
  "message",
  "minimize",
  "min_modify",
  "min_style",
  "molecule",
  "ndx2group",
  "neb",
  "neb/spin",
  "neighbor",
  "neigh_modify",
  "newton",
  "next",
  "package",
  "pair_coeff",
  "pair_modify",
  "pair_style",
  "pair_write",
  "partition",
  "plugin",
  "prd",
  "print",
  "processors",
  "python",
  "quit",
  "read_data",
  "read_dump",
  "read_restart",
  "replicate",
  "rerun",
  "reset_atoms",
  "reset_timestep",
  "restart",
  "run",
  "run_style",
  "server",
  "set",
  "shell",
  "special_bonds",
  "suffix",
  "tad",
  "temper",
  "temper/grem",
  "temper/npt",
  "thermo",
  "thermo_modify",
  "thermo_style",
  "third_order",
  "timer",
  "timestep",
  "units",
  "velocity",
  "write_coeff",
  "write_data",
  "write_restart",
  "fix",
  "compute",
  "dump",
  "region",
  "variable",
  "group",
  "uncompute",
  "undump",
  "unfix",
]

const CONDITIONALS = ["if", "else", "elif", "then"]

export function highlightLAMMPS(code: string): string {
  const lines = code.split("\n")
  const highlightedLines = lines.map((line) => highlightLine(line))
  return highlightedLines.join("\n")
}

function highlightLine(line: string): string {
  // Handle empty lines
  if (line.trim() === "") {
    return line
  }

  // Handle comment lines
  if (line.trim().startsWith("#")) {
    return `<span class="lammps-comment">${escapeHtml(line)}</span>`
  }

  // Tokenize and highlight the line
  const tokens = tokenizeLine(line)
  return tokens
    .map((token) => {
      const className = getTokenClassName(token.type)
      if (className) {
        return `<span class="${className}">${escapeHtml(token.value)}</span>`
      }
      return escapeHtml(token.value)
    })
    .join("")
}

interface LineToken {
  type: string
  value: string
}

function tokenizeLine(line: string): LineToken[] {
  const tokens: LineToken[] = []
  let position = 0

  // Handle leading whitespace
  const leadingWhitespace = line.match(/^\s*/)
  if (leadingWhitespace && leadingWhitespace[0].length > 0) {
    tokens.push({
      type: "whitespace",
      value: leadingWhitespace[0],
    })
    position = leadingWhitespace[0].length
  }

  const remainingLine = line.slice(position)
  if (remainingLine.trim() === "") {
    return tokens
  }

  // Split the remaining line into parts
  const parts = remainingLine.match(/\S+|\s+/g) || []
  let isFirstWord = true

  for (const part of parts) {
    if (/^\s+$/.test(part)) {
      // Whitespace
      tokens.push({
        type: "whitespace",
        value: part,
      })
    } else if (part.startsWith("#")) {
      // Comment - rest of line
      const restOfLine = remainingLine.slice(remainingLine.indexOf(part))
      tokens.push({
        type: "comment",
        value: restOfLine,
      })
      break
    } else if (
      (part.startsWith('"') && part.endsWith('"') && part.length > 1) ||
      (part.startsWith("'") && part.endsWith("'") && part.length > 1)
    ) {
      // String literals
      tokens.push({
        type: "string",
        value: part,
      })
    } else if (/^[0-9]+:[0-9]+(:[0-9]+)?$/.test(part)) {
      // Range numbers (e.g., 1:100, 1:10:2)
      tokens.push({
        type: "number",
        value: part,
      })
    } else if (/^[+-]?[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?$/.test(part)) {
      // Numbers (including scientific notation)
      tokens.push({
        type: "number",
        value: part,
      })
    } else if (part.startsWith("$")) {
      // Variables
      tokens.push({
        type: "variable",
        value: part,
      })
    } else if (isFirstWord && LAMMPS_COMMANDS.includes(part.toLowerCase())) {
      // LAMMPS commands (first non-whitespace word of line)
      tokens.push({
        type: "keyword",
        value: part,
      })
    } else if (CONDITIONALS.includes(part.toLowerCase())) {
      // Conditionals
      tokens.push({
        type: "keyword",
        value: part,
      })
    } else if (/^[+\-*^|/!%&=<>~.]+$/.test(part)) {
      // Operators
      tokens.push({
        type: "operator",
        value: part,
      })
    } else {
      // Default text/identifiers
      tokens.push({
        type: "text",
        value: part,
      })
    }

    // After first non-whitespace token, no longer first word
    if (isFirstWord && !/^\s+$/.test(part)) {
      isFirstWord = false
    }
  }

  return tokens
}

function getTokenClassName(tokenType: string): string {
  switch (tokenType) {
    case "keyword":
      return "lammps-keyword"
    case "comment":
      return "lammps-comment"
    case "string":
      return "lammps-string"
    case "number":
      return "lammps-number"
    case "variable":
      return "lammps-variable"
    case "operator":
      return "lammps-operator"
    case "text":
      return "lammps-text"
    case "whitespace":
    default:
      return ""
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
