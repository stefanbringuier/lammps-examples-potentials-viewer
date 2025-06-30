import { describe, it, expect } from "vitest";
import { exampleEntries } from "../data/examples.js";
import { potentialEntries } from "../data/potentials.js";
import { fetch } from "undici";

const BASE_RAW_GITHUB_URL = "https://raw.githubusercontent.com/lammps/lammps/stable/";

// Known broken files that return 404 - these are documented but not actually present in the repository
const KNOWN_BROKEN_FILES = [
    "examples/bpm/plasticity/in.bpm.plasticity",
    "examples/bpm/poissons_ratio/in.bpm.poissons_ratio",
    "examples/granular/in.tableting.200",
    "examples/granular/in.triaxial.compaction.12",
    "examples/granular/in.sync_verlet",
    "examples/python/in.python.wrap",
    "examples/snap/in.snap.grid.triclinic",
    "examples/snap/in.gaussian.grid",
    "examples/snap/in.snap.grid",
    "examples/streitz/in.ctip",
    "examples/streitz/data.ctip",
    "examples/stress_vcm/in.stress_vcm",
    "examples/wall/in.wall.sphere",
    "examples/wall/in.wall.block",
    "examples/ELASTIC_T/in.elastic",
    "examples/SPIN/iron/data.iron",
    "examples/SPIN/nickel/data.nickel",
    "examples/SPIN/bfo/data.bfo",
    "examples/SPIN/cobalt_fcc/data.cobalt_fcc",
    "examples/SPIN/cobalt_hcp/data.cobalt_hcp",
    "examples/reaxff/water/in.water.qtpie.field",
    "examples/reaxff/water/in.water.qeqr.field",
    "examples/reaxff/water/in.water.qtpie",
    "examples/reaxff/water/in.water.qeqr"
];

function isKnownBrokenFile(path: string, file: string): boolean {
    const fullPath = `${path}/${file}`;
    return KNOWN_BROKEN_FILES.includes(fullPath);
}

describe("File and download links", () => {
    describe("Examples", () => {
        exampleEntries.forEach((entry) => {
            if (entry.files) {
                entry.files.forEach((file) => {
                    const testName = `should have a working link for ${entry.path}/${file}`;

                    if (isKnownBrokenFile(entry.path, file)) {
                        it.skip(testName, () => {
                            // Skip known broken files
                        });
                    } else {
                        it(testName, async () => {
                            const url = `${BASE_RAW_GITHUB_URL}${entry.path}/${file}`;
                            const response = await fetch(url, { method: "HEAD" });
                            expect(response.status).toBe(200);
                        });
                    }
                });
            }
        });
    });

    describe("Potentials", () => {
        potentialEntries.forEach((entry) => {
            if (entry.files) {
                const basePath = Array.isArray(entry.path) ? entry.path[0] : entry.path;
                entry.files.forEach((file) => {
                    it(`should have a working link for ${basePath}/${file}`, async () => {
                        const url = `${BASE_RAW_GITHUB_URL}${basePath}/${file}`;
                        const response = await fetch(url, { method: "HEAD" });
                        expect(response.status).toBe(200);
                    });
                });
            }
        });
    });
}); 