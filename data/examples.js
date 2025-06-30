const BASE_GITHUB_URL = "https://github.com/lammps/lammps/tree/stable"

export const exampleEntries = [
    // Top-level examples (simple folders)
    {
        id: "airebo",
        name: "AIREBO Potential",
        category: "molecular",
        description: "Adaptive Intermolecular Reactive Empirical Bond Order (AIREBO) potential for hydrocarbons. Demonstrates reactive molecular dynamics with bond breaking/forming.",
        path: "examples/airebo",
        files: [
            "in.airebo",
            "in.airebo-0-0",
            "in.airebo-m",
            "in.rebo2",
            "data.airebo"
        ],
        keywords: [
            "airebo",
            "rebo",
            "reactive",
            "hydrocarbon",
            "bonds",
            "chemistry"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/airebo`,
    },
    {
        id: "amoeba",
        name: "AMOEBA Force Field",
        category: "molecular",
        description: "Atomic Multipole Optimized Energetics for Biomolecular Applications (AMOEBA) force field examples for water and proteins.",
        path: "examples/amoeba",
        files: [
            "in.water_dimer.amoeba",
            "in.water_box.amoeba",
            "in.ubiquitin",
            "in.water_dimer.hippo",
            "in.water_hexamer.hippo",
            "in.water_box.hippo",
            "in.water_hexamer.amoeba",
            "data.water_box.amoeba",
            "data.ubiquitin",
            "data.water_dimer.hippo",
            "data.water_hexamer.hippo",
            "data.water_hexamer.amoeba",
            "data.water_box.hippo",
            "data.water_dimer.amoeba"
        ],
        keywords: [
            "amoeba",
            "polarizable",
            "multipole",
            "water",
            "protein",
            "biomolecular"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/amoeba`,
    },
    {
        id: "atm",
        name: "Axilrod-Teller-Muto Potential",
        category: "physics",
        description: "Axilrod-Teller-Muto potential example demonstrating three-body interactions in noble gas systems.",
        path: "examples/atm",
        files: [
            "in.atm"
        ],
        keywords: [
            "atm",
            "three-body",
            "noble-gas",
            "axilrod-teller-muto"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/atm`,
    },
    {
        id: "balance",
        name: "Load Balancing",
        category: "parallel",
        description: "Demonstrates various load balancing strategies for parallel simulations. Essential for efficient multi-processor runs.",
        path: "examples/balance",
        files: [
            "in.balance.var.dynamic",
            "in.balance.clock.static",
            "in.balance",
            "in.balance.group.static",
            "in.balance.clock.dynamic",
            "in.balance.bond.fast",
            "in.balance.neigh.dynamic",
            "in.balance.neigh.static",
            "in.balance.group.dynamic",
            "in.balance.kspace",
            "in.balance.bond.slow",
            "in.balance.neigh.rcb"
        ],
        keywords: [
            "balance",
            "parallel",
            "performance",
            "mpi",
            "load",
            "efficiency"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/balance`,
    },
    {
        id: "body",
        name: "Rigid Body Dynamics",
        category: "mechanics",
        description: "Rigid body particles with complex shapes. Demonstrates mechanics of finite-size particles with rotational degrees of freedom.",
        path: "examples/body",
        files: [
            "in.cubes",
            "in.wall2d",
            "in.pour3d",
            "in.body",
            "in.squares",
            "data.body",
            "data.squares",
            "data.cubes"
        ],
        keywords: [
            "rigid",
            "body",
            "rotation",
            "mechanics",
            "finite-size"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/body`,
    },
    {
        id: "charmmfsw",
        name: "CHARMM Force Switching",
        category: "molecular",
        description: "CHARMM force field with force switching for biomolecular simulations. Standard protocol for protein simulations.",
        path: "examples/charmmfsw",
        files: [
            "in.charmmfsw",
            "data.charmmfsw.gz"
        ],
        keywords: [
            "charmm",
            "force-field",
            "biomolecular",
            "protein",
            "switching"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/charmmfsw`,
    },
    {
        id: "cmap",
        name: "CMAP Corrections",
        category: "molecular",
        description: "Correction maps (CMAP) for dihedral angles in protein force fields. Improves backbone conformations.",
        path: "examples/cmap",
        files: [
            "in.cmap",
            "charmm22.cmap",
            "gagg.data"
        ],
        keywords: [
            "cmap",
            "dihedral",
            "protein",
            "backbone",
            "correction"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/cmap`,
    },
    {
        id: "colloid",
        name: "Colloidal Systems",
        category: "soft-matter",
        description: "Colloidal particle simulations with complex interactions. Models suspensions and soft matter systems.",
        path: "examples/colloid",
        files: [
            "in.colloid"
        ],
        keywords: [
            "colloid",
            "suspension",
            "soft-matter",
            "particles"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/colloid`,
    },

    // ASPHERE subdirectories - each as separate entry
    {
        id: "asphere-box",
        name: "ASPHERE Box Particles",
        category: "granular",
        description: "Box-shaped particles simulation using ASPHERE package. Demonstrates non-spherical rigid body dynamics.",
        path: "examples/ASPHERE/box",
        files: [
            "in.box",
            "in.box.mp",
            "data.box"
        ],
        keywords: [
            "asphere",
            "box",
            "rigid-body",
            "granular",
            "shapes"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/box`,
    },
    {
        id: "asphere-dimer",
        name: "ASPHERE Dimer Particles",
        category: "granular",
        description: "Dimer particles simulation using ASPHERE package. Two-particle rigid body dynamics.",
        path: "examples/ASPHERE/dimer",
        files: [
            "in.dimer",
            "in.dimer.mp",
            "data.dimer"
        ],
        keywords: [
            "asphere",
            "dimer",
            "rigid-body",
            "two-particle",
            "granular"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/dimer`,
    },
    {
        id: "asphere-ellipsoid",
        name: "ASPHERE Ellipsoid Particles",
        category: "granular",
        description: "Ellipsoidal particles simulation using ASPHERE package. Non-spherical particle dynamics.",
        path: "examples/ASPHERE/ellipsoid",
        files: [
            "in.ellipsoid",
            "in.ellipsoid.mp"
        ],
        keywords: [
            "asphere",
            "ellipsoid",
            "non-spherical",
            "granular",
            "orientation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/ellipsoid`,
    },
    {
        id: "asphere-line",
        name: "ASPHERE Line Particles",
        category: "granular",
        description: "Line particles simulation using ASPHERE package. One-dimensional rigid bodies.",
        path: "examples/ASPHERE/line",
        files: [
            "in.line.srd",
            "in.line",
            "data.line.srd",
            "data.line"
        ],
        keywords: [
            "asphere",
            "line",
            "one-dimensional",
            "rigid-body",
            "srd"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/line`,
    },
    {
        id: "asphere-tri",
        name: "ASPHERE Triangle Particles",
        category: "granular",
        description: "Triangular particles simulation using ASPHERE package. Two-dimensional rigid bodies.",
        path: "examples/ASPHERE/tri",
        files: [
            "in.tri.srd",
            "data.tri.srd"
        ],
        keywords: [
            "asphere",
            "triangle",
            "two-dimensional",
            "rigid-body",
            "srd"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/tri`,
    },
    {
        id: "asphere-star",
        name: "ASPHERE Star Particles",
        category: "granular",
        description: "Star-shaped particles simulation using ASPHERE package. Complex rigid body shapes.",
        path: "examples/ASPHERE/star",
        files: [
            "in.star",
            "in.star.mp",
            "data.star"
        ],
        keywords: [
            "asphere",
            "star",
            "complex-shape",
            "rigid-body",
            "granular"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/star`,
    },
    {
        id: "asphere-poly",
        name: "ASPHERE Poly Particles",
        category: "granular",
        description: "Poly particles simulation using ASPHERE package. Multiple rigid body configurations.",
        path: "examples/ASPHERE/poly",
        files: [
            "in.poly",
            "in.poly.mp"
        ],
        keywords: [
            "asphere",
            "poly",
            "multiple",
            "rigid-body",
            "configurations"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/poly`,
    },
    {
        id: "asphere-flat-membrane",
        name: "ASPHERE Flat Membrane",
        category: "soft-matter",
        description: "Flat membrane simulation using ASPHERE package. Membrane dynamics and deformation.",
        path: "examples/ASPHERE/flat_membrane",
        files: [
            "in.flat_membrane"
        ],
        keywords: [
            "asphere",
            "membrane",
            "flat",
            "deformation",
            "soft-matter"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/flat_membrane`,
    },
    {
        id: "asphere-vesicle",
        name: "ASPHERE Vesicle",
        category: "soft-matter",
        description: "Vesicle simulation using ASPHERE package. Spherical membrane dynamics.",
        path: "examples/ASPHERE/vesicle",
        files: [
            "in.vesicle"
        ],
        keywords: [
            "asphere",
            "vesicle",
            "spherical",
            "membrane",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ASPHERE/vesicle`,
    },

    // BPM subdirectories
    {
        id: "bpm-impact",
        name: "BPM Impact",
        category: "mechanics",
        description: "Bonded particle model impact simulations. Studies impact mechanics and fracture.",
        path: "examples/bpm/impact",
        files: [
            "in.bpm.impact.spring",
            "in.bpm.impact.rotational"
        ],
        keywords: [
            "bpm",
            "impact",
            "fracture",
            "mechanics",
            "collision"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/bpm/impact`,
    },
    {
        id: "bpm-plasticity",
        name: "BPM Plasticity",
        category: "mechanics",
        description: "Bonded particle model plasticity simulations. Studies plastic deformation and yield.",
        path: "examples/bpm/plasticity",
        files: [
            "in.bpm.plasticity"
        ],
        keywords: [
            "bpm",
            "plasticity",
            "deformation",
            "yield",
            "mechanics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/bpm/plasticity`,
    },
    {
        id: "bpm-poissons-ratio",
        name: "BPM Poisson's Ratio",
        category: "mechanics",
        description: "Bonded particle model Poisson's ratio calculations. Mechanical property determination.",
        path: "examples/bpm/poissons_ratio",
        files: [
            "in.bpm.poissons_ratio"
        ],
        keywords: [
            "bpm",
            "poissons-ratio",
            "mechanical",
            "properties",
            "elasticity"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/bpm/poissons_ratio`,
    },
    {
        id: "bpm-pour",
        name: "BPM Pour",
        category: "granular",
        description: "Bonded particle model pouring simulations. Granular flow with cohesive particles.",
        path: "examples/bpm/pour",
        files: [
            "in.bpm.pour"
        ],
        keywords: [
            "bpm",
            "pour",
            "granular",
            "flow",
            "cohesive"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/bpm/pour`,
    },

    // More top-level examples
    {
        id: "comb",
        name: "COMB Potential",
        category: "materials",
        description: "Charge optimized many-body (COMB) potential for metals and ceramics. Handles charge transfer and many-body effects.",
        path: "examples/comb",
        files: [
            "in.comb.Si",
            "in.comb.Cu2O.elastic",
            "in.comb.Cu",
            "in.comb.HfO2",
            "in.comb.Si.elastic",
            "in.comb3",
            "data.c-HfO2",
            "data.t-HfO2",
            "data.comb3-OHCCu",
            "data.m-HfO2",
            "data.Cu2O"
        ],
        keywords: [
            "comb",
            "many-body",
            "charge",
            "metals",
            "ceramics",
            "oxide"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/comb`,
    },
    {
        id: "controller",
        name: "Fix Controller",
        category: "thermostats",
        description: "Use of fix controller as a thermostat. Advanced temperature control methods.",
        path: "examples/controller",
        files: [
            "in.controller.wall",
            "in.controller.temp"
        ],
        keywords: [
            "controller",
            "thermostat",
            "temperature",
            "control",
            "fix"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/controller`,
    },
    {
        id: "coreshell",
        name: "Core/Shell Model",
        category: "electrostatics",
        description: "Core/shell model using CORESHELL package. Models polarizable ions and materials.",
        path: "examples/coreshell",
        files: [
            "in.coreshell.dsf",
            "in.coreshell.wolf",
            "in.coreshell",
            "in.coreshell.thermostats",
            "data.coreshell"
        ],
        keywords: [
            "coreshell",
            "polarizable",
            "ions",
            "electrostatics",
            "shell-model"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/coreshell`,
    },
    {
        id: "crack",
        name: "Crack Propagation",
        category: "mechanics",
        description: "Fracture mechanics and crack propagation simulations. Studies material failure and crack growth.",
        path: "examples/crack",
        files: [
            "in.crack"
        ],
        keywords: [
            "crack",
            "fracture",
            "mechanics",
            "failure",
            "propagation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/crack`,
    },
    {
        id: "deposit",
        name: "Deposition Processes",
        category: "materials",
        description: "Thin film deposition and growth processes. Simulates material deposition onto substrates.",
        path: "examples/deposit",
        files: [
            "in.deposit.molecule.rigid-nve-small",
            "in.deposit.molecule.shake",
            "in.deposit.molecule.rigid-small",
            "in.deposit.molecule",
            "in.deposit.atom",
            "in.deposit.molecule.rigid-nvt-small"
        ],
        keywords: [
            "deposition",
            "thin-film",
            "growth",
            "substrate",
            "materials"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/deposit`,
    },
    {
        id: "dipole",
        name: "Dipolar Systems",
        category: "electrostatics",
        description: "Systems with dipolar interactions and electrostatic effects. Models magnetic and electric dipoles.",
        path: "examples/dipole",
        files: [
            "in.dipole"
        ],
        keywords: [
            "dipole",
            "electrostatic",
            "magnetic",
            "electric",
            "interaction"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/dipole`,
    },
    {
        id: "dreiding",
        name: "Dreiding Force Field",
        category: "molecular",
        description: "Dreiding force field for organic molecules and polymers. Generic force field for diverse chemical systems.",
        path: "examples/dreiding",
        files: [
            "in.dreiding",
            "data.dreiding"
        ],
        keywords: [
            "dreiding",
            "force-field",
            "organic",
            "polymer",
            "generic"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/dreiding`,
    },
    {
        id: "eim",
        name: "Embedded Ion Method",
        category: "materials",
        description: "Embedded ion method (EIM) for ionic crystals and compounds. Models ionic systems with embedding.",
        path: "examples/eim",
        files: [
            "in.eim",
            "data.eim"
        ],
        keywords: [
            "eim",
            "ionic",
            "crystals",
            "embedding",
            "compounds"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/eim`,
    },
    {
        id: "ellipse",
        name: "Ellipsoidal Particles",
        category: "granular",
        description: "Gay-Berne and RE-squared potentials for ellipsoidal particles. Models liquid crystals and anisotropic particles.",
        path: "examples/ellipse",
        files: [
            "in.ellipse.gayberne",
            "in.ellipse.resquared"
        ],
        keywords: [
            "ellipsoid",
            "gay-berne",
            "liquid-crystal",
            "anisotropic",
            "orientation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ellipse`,
    },
    {
        id: "fire",
        name: "FIRE Minimization",
        category: "optimization",
        description: "Fast Inertial Relaxation Engine (FIRE) minimization algorithm. Advanced optimization for complex energy landscapes.",
        path: "examples/fire",
        files: [
            "in.meam.fire",
            "in.abcfire_mod",
            "in.neb.sivac.fire_mod",
            "in.neb.sivac.fire",
            "in.meam.abcfire",
            "in.abcfire",
            "in.fire",
            "in.neb.sivac.qm",
            "in.neb.sivac.abcfire",
            "in.fire_mod",
            "in.cg",
            "in.neb.sivac.abcfire_mod",
            "data.fe"
        ],
        keywords: [
            "fire",
            "minimization",
            "optimization",
            "relaxation",
            "neb"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/fire`,
    },
    {
        id: "flow",
        name: "Flow Dynamics",
        category: "fluid",
        description: "Fluid flow simulations including Couette and Poiseuille flow. Studies fluid dynamics and rheology.",
        path: "examples/flow",
        files: [
            "in.flow.pois",
            "in.flow.couette"
        ],
        keywords: [
            "flow",
            "fluid",
            "couette",
            "poiseuille",
            "rheology",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/flow`,
    },
    {
        id: "friction",
        name: "Friction and Tribology",
        category: "mechanics",
        description: "Friction and tribological simulations. Studies sliding interfaces and wear mechanisms.",
        path: "examples/friction",
        files: [
            "in.friction"
        ],
        keywords: [
            "friction",
            "tribology",
            "sliding",
            "wear",
            "interface"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/friction`,
    },
    {
        id: "gjf",
        name: "GJF Integrator",
        category: "integration",
        description: "Grimmer-Jalali-Farago (GJF) integrator examples. Advanced integration methods.",
        path: "examples/gjf",
        files: [
            "in.gjf.vfull",
            "in.gjf.vhalf"
        ],
        keywords: [
            "gjf",
            "integrator",
            "grimmer",
            "jalali",
            "farago"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/gjf`,
    },
    {
        id: "granular",
        name: "Granular Materials",
        category: "granular",
        description: "Granular material simulations including pouring, heating, and compaction. Models discrete particle systems.",
        path: "examples/granular",
        files: [
            "in.restitution",
            "in.tableting.200",
            "in.pour.drum",
            "in.pour.heat",
            "in.pour.flatwall"
        ],
        keywords: [
            "granular",
            "particles",
            "pouring",
            "compaction",
            "discrete"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/granular`,
    },
    {
        id: "granregion",
        name: "Granular Region Walls",
        category: "granular",
        description: "Use of fix wall/region/gran as boundary on granular particles. Complex boundary conditions.",
        path: "examples/granregion",
        files: [
            "in.granregion.funnel",
            "in.granregion.mixer",
            "in.granregion.box"
        ],
        keywords: [
            "granular",
            "wall",
            "region",
            "boundary",
            "particles"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/granregion`,
    },
    {
        id: "grid",
        name: "Grid Operations",
        category: "analysis",
        description: "Grid-based operations and analysis. Spatial binning and field calculations.",
        path: "examples/grid",
        files: [
            "in.grid.3d",
            "in.sph",
            "in.grid.2d",
            "data.sph"
        ],
        keywords: [
            "grid",
            "spatial",
            "binning",
            "field",
            "analysis"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/grid`,
    },
    {
        id: "hugoniostat",
        name: "Hugoniostat",
        category: "shock",
        description: "Hugoniostat method for shock wave simulations. Studies high-pressure shock physics.",
        path: "examples/hugoniostat",
        files: [
            "in.hugoniostat"
        ],
        keywords: [
            "hugoniostat",
            "shock",
            "wave",
            "pressure",
            "physics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/hugoniostat`,
    },
    {
        id: "hyper",
        name: "Hyperdynamics",
        category: "rare-events",
        description: "Global and local hyperdynamics of diffusion on Pt surface. Accelerated dynamics methods.",
        path: "examples/hyper",
        files: [
            "in.hyper.global",
            "in.hyper.local"
        ],
        keywords: [
            "hyperdynamics",
            "diffusion",
            "platinum",
            "surface",
            "accelerated"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/hyper`,
    },
    {
        id: "indent",
        name: "Nanoindentation",
        category: "mechanics",
        description: "Nanoindentation simulations for mechanical testing. Models tip-sample interactions and hardness.",
        path: "examples/indent",
        files: [
            "in.indent.min",
            "in.indent"
        ],
        keywords: [
            "indent",
            "nanoindentation",
            "mechanical",
            "hardness",
            "tip"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/indent`,
    },
    {
        id: "kim",
        name: "OpenKIM Repository",
        category: "potentials",
        description: "Use of potentials from the OpenKIM Repository. Standardized interatomic models.",
        path: "examples/kim",
        files: [
            "in.lammps.melt",
            "in.kim-ex.melt",
            "in.kim-query",
            "in.kim-pm.melt",
            "in.kim-pm-property",
            "in.kim-sm.melt",
            "in.kim-pm-query.melt"
        ],
        keywords: [
            "kim",
            "openkim",
            "repository",
            "potentials",
            "standardized"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/kim`,
    },
    {
        id: "mc",
        name: "Monte Carlo Features",
        category: "monte-carlo",
        description: "Monte Carlo features via fix gcmc, widom and other commands. Grand canonical and insertion methods.",
        path: "examples/mc",
        files: [
            "in.widom.lj",
            "in.mixed",
            "in.widom.spce",
            "in.gcmc.co2",
            "in.pure",
            "in.gcmc.h2o",
            "in.gcmc.lj",
            "in.sgcmc.eam",
            "data.spce",
            "data.widom.lj",
            "data.bead"
        ],
        keywords: [
            "monte-carlo",
            "gcmc",
            "widom",
            "insertion",
            "grand-canonical"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/mc`,
    },
    {
        id: "mdi",
        name: "MDI Code Coupling",
        category: "coupling",
        description: "Use of the MDI package and MolSSI MDI code coupling library. Multi-code simulations.",
        path: "examples/mdi",
        files: [
            "in.sequence.python",
            "in.aimd.engine",
            "in.aimd.alone",
            "in.series.driver",
            "in.aimd.driver",
            "in.snapshot.engine",
            "in.aimdpy.mm",
            "in.series.alone",
            "in.aimd.driver.plugin",
            "in.snapshot.driver",
            "in.snapshot.alone",
            "in.aimdpy.qm",
            "in.snapshot.driver.plugin",
            "in.series.engine",
            "in.series.driver.plugin",
            "data.series.0.7",
            "data.snapshot",
            "data.series.0.9",
            "data.series.0.8"
        ],
        keywords: [
            "mdi",
            "coupling",
            "molssi",
            "multi-code",
            "library"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/mdi`,
    },
    {
        id: "meam",
        name: "MEAM Potential",
        category: "materials",
        description: "Modified Embedded Atom Method (MEAM) for metals and alloys. Advanced many-body potential for metallurgy.",
        path: "examples/meam",
        files: [
            "in.meam.shear",
            "in.meam",
            "data.meam"
        ],
        keywords: [
            "meam",
            "metals",
            "alloys",
            "embedded-atom",
            "many-body"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/meam`,
    },
    {
        id: "meam-msmeam",
        name: "MEAM Multi-State",
        category: "materials",
        description: "Multi-state MEAM potential examples. Advanced metallurgical modeling.",
        path: "examples/meam/msmeam",
        files: [
            "in.msmeam"
        ],
        keywords: [
            "meam",
            "multi-state",
            "metallurgy",
            "advanced",
            "modeling"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/meam/msmeam`,
    },
    {
        id: "melt",
        name: "Melting Simulations",
        category: "phase-transitions",
        description: "Melting and crystallization processes. Studies phase transitions and nucleation.",
        path: "examples/melt",
        files: [
            "in.melt"
        ],
        keywords: [
            "melt",
            "crystallization",
            "phase-transition",
            "nucleation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/melt`,
    },
    {
        id: "mesh",
        name: "Mesh Operations",
        category: "geometry",
        description: "Mesh-based operations and geometry handling. Complex geometric structures.",
        path: "examples/mesh",
        files: [
            "in.marble_race",
            "in.mesh_box"
        ],
        keywords: [
            "mesh",
            "geometry",
            "structures",
            "complex",
            "operations"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/mesh`,
    },
    {
        id: "micelle",
        name: "Micelle Formation",
        category: "soft-matter",
        description: "Self-assembly of surfactants into micelles. Models amphiphilic systems and aggregation.",
        path: "examples/micelle",
        files: [
            "in.micelle-rigid",
            "in.micelle",
            "data.micelle"
        ],
        keywords: [
            "micelle",
            "surfactant",
            "self-assembly",
            "amphiphilic",
            "aggregation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/micelle`,
    },
    {
        id: "min",
        name: "Energy Minimization",
        category: "optimization",
        description: "Energy minimization techniques and algorithms. Essential for structure optimization.",
        path: "examples/min",
        files: [
            "in.min",
            "in.min.box"
        ],
        keywords: [
            "minimization",
            "optimization",
            "energy",
            "structure",
            "relaxation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/min`,
    },
    {
        id: "mliap",
        name: "Machine Learning IAP",
        category: "machine-learning",
        description: "Machine learning interatomic potentials. Modern ML-based force fields and training.",
        path: "examples/mliap",
        files: [
            "in.mliap.snap.quadratic",
            "in.mliap.nn.Ta06A",
            "in.mliap.pytorch.ace.NN",
            "in.mliap.snap.Ta06A",
            "in.mliap.snap.compute",
            "in.mliap.ace.compute",
            "in.mliap.so3.Ni_Mo",
            "in.mliap.pytorch.ace",
            "in.mliap.pytorch.Ta06A",
            "in.mliap.snap.WBe.PRB2019",
            "in.mliap.snap.chem",
            "in.mliap.unified.lj.Ar",
            "in.mliap.nn.Cu",
            "in.mliap.quadratic.compute",
            "in.mliap.so3.nn.Si",
            "in.mliap.pytorch.relu1hidden"
        ],
        keywords: [
            "mliap",
            "machine-learning",
            "interatomic",
            "potential",
            "training"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/mliap`,
    },
    {
        id: "mliap-jax",
        name: "MLIAP JAX",
        category: "machine-learning",
        description: "JAX-based machine learning interatomic potentials. Modern ML framework integration.",
        path: "examples/mliap/jax",
        files: [
            "in.run"
        ],
        keywords: [
            "mliap",
            "jax",
            "machine-learning",
            "framework",
            "integration"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/mliap/jax`,
    },
    {
        id: "msst",
        name: "MSST Shock Dynamics",
        category: "shock",
        description: "Multi-Scale Shock Technique (MSST) shock dynamics. Alternative shock wave method.",
        path: "examples/msst",
        files: [
            "in.msst"
        ],
        keywords: [
            "msst",
            "shock",
            "dynamics",
            "multi-scale",
            "wave"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/msst`,
    },
    {
        id: "multi",
        name: "Multi-scale Methods",
        category: "multi-scale",
        description: "Multi-scale modeling techniques combining different levels of theory. Bridges length and time scales.",
        path: "examples/multi",
        files: [
            "in.powerlaw",
            "in.colloid",
            "in.granular",
            "data.powerlaw"
        ],
        keywords: [
            "multi-scale",
            "coupling",
            "hierarchy",
            "bridge",
            "levels"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/multi`,
    },
    {
        id: "nb3b",
        name: "Non-bonded 3-body",
        category: "many-body",
        description: "Use of non-bonded 3-body harmonic pair style. Three-body interactions without bonds.",
        path: "examples/nb3b",
        files: [
            "in.nb3b",
            "in.nb3b.screened",
            "data.nb3b",
            "data.NaPO3"
        ],
        keywords: [
            "non-bonded",
            "three-body",
            "harmonic",
            "interactions"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/nb3b`,
    },
    {
        id: "neb",
        name: "Nudged Elastic Band",
        category: "transitions",
        description: "Nudged Elastic Band (NEB) method for transition state finding. Studies reaction pathways and barriers.",
        path: "examples/neb",
        files: [
            "in.neb.sivac",
            "in.neb.hop2",
            "in.neb.hop1.end",
            "in.neb.hop1"
        ],
        keywords: [
            "neb",
            "transition",
            "pathway",
            "barrier",
            "reaction"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/neb`,
    },
    {
        id: "nemd",
        name: "Non-equilibrium MD",
        category: "transport",
        description: "Non-equilibrium MD of 2d sheared system. Transport properties and flow studies.",
        path: "examples/nemd",
        files: [
            "in.nemd"
        ],
        keywords: [
            "nemd",
            "non-equilibrium",
            "shear",
            "transport",
            "flow"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/nemd`,
    },
    {
        id: "numdiff",
        name: "Numerical Differentiation",
        category: "analysis",
        description: "Numerical differentiation methods. Force calculation and verification techniques.",
        path: "examples/numdiff",
        files: [
            "in.numdiff"
        ],
        keywords: [
            "numdiff",
            "numerical",
            "differentiation",
            "force",
            "verification"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/numdiff`,
    },
    {
        id: "obstacle",
        name: "Flow Around Obstacles",
        category: "fluid",
        description: "Flow around two voids in a 2d channel. Fluid dynamics with complex geometries.",
        path: "examples/obstacle",
        files: [
            "in.obstacle"
        ],
        keywords: [
            "obstacle",
            "flow",
            "voids",
            "channel",
            "geometry"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/obstacle`,
    },
    {
        id: "peri",
        name: "Peridynamics",
        category: "continuum",
        description: "Peridynamics method for continuum mechanics with fracture. Non-local continuum theory.",
        path: "examples/peri",
        files: [
            "in.peri.ves",
            "in.peri.lps",
            "in.peri.pmb",
            "in.peri.eps",
            "in.peri-pmb"
        ],
        keywords: [
            "peridynamics",
            "continuum",
            "fracture",
            "non-local",
            "mechanics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/peri`,
    },
    {
        id: "peptide",
        name: "Peptide Dynamics",
        category: "biological",
        description: "Protein and peptide molecular dynamics simulations. Studies biomolecular structure and dynamics.",
        path: "examples/peptide",
        files: [
            "in.peptide",
            "data.peptide"
        ],
        keywords: [
            "peptide",
            "protein",
            "biomolecular",
            "dynamics",
            "structure"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/peptide`,
    },
    {
        id: "pour",
        name: "Particle Pouring",
        category: "granular",
        description: "Particle pouring and packing simulations. Studies granular flow and jamming transitions.",
        path: "examples/pour",
        files: [
            "in.pour.2d.molecule",
            "in.pour",
            "in.pour.2d"
        ],
        keywords: [
            "pour",
            "packing",
            "granular",
            "flow",
            "jamming"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/pour`,
    },
    {
        id: "prd",
        name: "Parallel Replica Dynamics",
        category: "rare-events",
        description: "Parallel Replica Dynamics for rare event simulations. Accelerates long-timescale processes.",
        path: "examples/prd",
        files: [
            "in.prd"
        ],
        keywords: [
            "prd",
            "rare-events",
            "parallel",
            "acceleration",
            "timescale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/prd`,
    },
    {
        id: "python",
        name: "Embedded Python",
        category: "scripting",
        description: "Using embedded Python in a LAMMPS input script. Scripting and automation.",
        path: "examples/python",
        files: [
            "in.python",
            "in.fix_python_invoke",
            "in.pair_python_long",
            "in.pair_python_coulomb",
            "in.pair_python_spce",
            "in.pair_python_harmonic",
            "in.pair_python_hybrid",
            "in.fix_python_move_nve_melt_opt",
            "in.fix_python_invoke_neighlist",
            "in.fix_python_move_nve_melt",
            "in.pair_python_table",
            "in.pair_python_melt",
            "in.python.wrap",
            "data.spce"
        ],
        keywords: [
            "python",
            "embedded",
            "scripting",
            "automation",
            "programming"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/python`,
    },
    {
        id: "qeq",
        name: "Charge Equilibration",
        category: "electrostatics",
        description: "Charge equilibration (QEq) methods for dynamic charges. Models charge transfer and polarization.",
        path: "examples/qeq",
        files: [
            "in.qeq.buck",
            "in.qeq.reaxff",
            "data.CHO",
            "data.aC"
        ],
        keywords: [
            "qeq",
            "charge",
            "equilibration",
            "transfer",
            "polarization"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/qeq`,
    },
    {
        id: "reaxff",
        name: "ReaxFF Potential",
        category: "reactive",
        description: "Reactive Force Field (ReaxFF) for chemical reactions. Models bond breaking/forming and chemistry.",
        path: "examples/reaxff",
        files: [
            "in.reaxff.tatb-shielded",
            "in.reaxff.rdx-shielded",
            "in.reaxff.tatb",
            "data.tatb",
            "data.rdx"
        ],
        keywords: [
            "reaxff",
            "reactive",
            "chemistry",
            "bonds",
            "reactions"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/reaxff`,
    },
    {
        id: "rdf-adf",
        name: "Radial/Angular Distribution",
        category: "analysis",
        description: "Computing radial and angle distribution functions for water. Structural analysis methods.",
        path: "examples/rdf-adf",
        files: [
            "in.spce",
            "data.spce"
        ],
        keywords: [
            "rdf",
            "adf",
            "distribution",
            "water",
            "analysis",
            "structure"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rdf-adf`,
    },
    {
        id: "relres",
        name: "Relative Resolution",
        category: "integration",
        description: "Relative resolution integration methods. Advanced time integration techniques.",
        path: "examples/relres",
        files: [
            "in.22DMH.relres",
            "in.22DMH.real",
            "in.22DMH.respa"
        ],
        keywords: [
            "relres",
            "relative",
            "resolution",
            "integration",
            "respa"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/relres`,
    },
    {
        id: "replicate",
        name: "Replicate Command",
        category: "utility",
        description: "Examples for the replicate command. System replication and scaling.",
        path: "examples/replicate",
        files: [
            "in.replicate.bond.x",
            "in.replicate.bond.x.y",
            "in.replicate.bond.x.noloop",
            "in.replicate.cnt",
            "in.replicate.bond.xy",
            "data.bond.x.y",
            "data.bond.x.noloop",
            "data.bond.x",
            "data.bond.xy"
        ],
        keywords: [
            "replicate",
            "scaling",
            "replication",
            "system",
            "utility"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/replicate`,
    },
    {
        id: "rerun",
        name: "Rerun and Read Dump",
        category: "analysis",
        description: "Use of rerun and read_dump commands. Post-processing and trajectory analysis.",
        path: "examples/rerun",
        files: [
            "in.rdf.rerun",
            "in.rdf.first",
            "in.read_dump",
            "in.rerun",
            "in.first"
        ],
        keywords: [
            "rerun",
            "read_dump",
            "post-processing",
            "trajectory",
            "analysis"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rerun`,
    },
    {
        id: "rigid",
        name: "Rigid Body Constraints",
        category: "constraints",
        description: "Rigid body dynamics and constraints. Maintains rigid molecular structures during simulation.",
        path: "examples/rigid",
        files: [
            "in.rigid.poems3",
            "in.rigid.tnr",
            "in.rigid.nve.early",
            "in.rigid.infile",
            "in.rigid.poems",
            "in.rigid.property",
            "in.rigid",
            "in.rigid.early",
            "in.rigid.poems4",
            "in.rigid.atomfile",
            "in.rigid.poems2",
            "in.rigid.small",
            "in.rigid.gravity",
            "in.rigid.poems5",
            "in.rigid.atomvar",
            "in.rigid.nve",
            "in.rigid.small.infile",
            "in.rigid.molecule",
            "data.rigid",
            "data.rigid-property",
            "data.rigid.small",
            "data.rigid.tnr"
        ],
        keywords: [
            "rigid",
            "constraints",
            "molecular",
            "structure",
            "poems"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rigid`,
    },
    {
        id: "shear",
        name: "Shear Deformation",
        category: "mechanics",
        description: "Shear deformation and mechanical testing. Studies plastic flow and mechanical properties.",
        path: "examples/shear",
        files: [
            "in.shear.void",
            "in.shear"
        ],
        keywords: [
            "shear",
            "deformation",
            "plastic",
            "mechanical",
            "flow"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/shear`,
    },
    {
        id: "snap",
        name: "SNAP Potential",
        category: "machine-learning",
        description: "Spectral Neighbor Analysis Potential (SNAP) machine learning potential. Modern ML-based interatomic potential.",
        path: "examples/snap",
        files: [
            "in.C_SNAP",
            "in.snap.Mo_Chen",
            "in.snap.WBe.PRB2019",
            "in.snap.InP.JCPA2020",
            "in.snap.grid.triclinic",
            "in.snap.compute",
            "in.snap.compute.quadratic",
            "in.gaussian.grid",
            "in.snap.scale.Ni_Zuo_JCPA2020",
            "in.snap.Ta06A",
            "in.snap.hybrid.WSNAP.HePair",
            "in.snap.grid",
            "in.snap.W.2940"
        ],
        keywords: [
            "snap",
            "machine-learning",
            "potential",
            "spectral",
            "neighbor"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/snap`,
    },
    {
        id: "srd",
        name: "Stochastic Rotation Dynamics",
        category: "mesoscale",
        description: "Stochastic Rotation Dynamics (SRD) for mesoscale hydrodynamics. Couples particles with fluid.",
        path: "examples/srd",
        files: [
            "in.srd.pure",
            "in.srd.mixture"
        ],
        keywords: [
            "srd",
            "stochastic",
            "rotation",
            "hydrodynamics",
            "mesoscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/srd`,
    },
    {
        id: "steinhardt",
        name: "Steinhardt Order Parameters",
        category: "analysis",
        description: "Steinhardt order parameters for crystal structure analysis. Local structure identification.",
        path: "examples/steinhardt",
        files: [
            "in.icos",
            "in.fcc",
            "in.bcc"
        ],
        keywords: [
            "steinhardt",
            "order-parameters",
            "crystal",
            "structure",
            "analysis"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/steinhardt`,
    },
    {
        id: "streitz",
        name: "Streitz/Mintmire Potential",
        category: "electrostatics",
        description: "Use of Streitz/Mintmire potential with charge equilibration. Variable charge methods.",
        path: "examples/streitz",
        files: [
            "in.streitz.wolf",
            "in.streitz.ewald",
            "data.streitz"
        ],
        keywords: [
            "streitz",
            "mintmire",
            "charge",
            "equilibration",
            "variable"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/streitz`,
    },
    {
        id: "stress-vcm",
        name: "Stress Profile Analysis",
        category: "analysis",
        description: "Removing binned rigid body motion from binned stress profile. Advanced stress analysis.",
        path: "examples/stress_vcm",
        files: [
            "in.stress_vcm"
        ],
        keywords: [
            "stress",
            "profile",
            "vcm",
            "rigid-body",
            "analysis"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/stress_vcm`,
    },
    {
        id: "tad",
        name: "Temperature Accelerated Dynamics",
        category: "rare-events",
        description: "Temperature Accelerated Dynamics (TAD) for rare events. Boost method for long-timescale processes.",
        path: "examples/tad",
        files: [
            "in.tad"
        ],
        keywords: [
            "tad",
            "temperature",
            "accelerated",
            "rare-events",
            "boost"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/tad`,
    },
    {
        id: "template",
        name: "Template Examples",
        category: "utility",
        description: "Template-based molecular systems. Molecular construction and templating.",
        path: "examples/template",
        files: [
            "in.hybrid",
            "in.tmpl-restart-mix",
            "in.mol-restart-mix",
            "in.mol-data-mix",
            "in.molecular-mix",
            "in.tmpl-data-mix",
            "in.template-mix"
        ],
        keywords: [
            "template",
            "molecular",
            "construction",
            "hybrid",
            "mixing"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/template`,
    },
    {
        id: "tersoff",
        name: "Tersoff Potential",
        category: "covalent",
        description: "Tersoff potential for covalent systems like silicon and carbon. Many-body bond-order potential.",
        path: "examples/tersoff",
        files: [
            "in.tersoff",
            "in.hBN_shift"
        ],
        keywords: [
            "tersoff",
            "covalent",
            "silicon",
            "carbon",
            "bond-order"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/tersoff`,
    },
    {
        id: "threebody",
        name: "Three-body Potentials",
        category: "many-body",
        description: "Three-body potentials including Stillinger-Weber and Vashishta. Captures angular dependencies.",
        path: "examples/threebody",
        files: [
            "in.mos2-bulk",
            "in.threebody",
            "in.mos2.sw.mod",
            "in.mos2.rebomos"
        ],
        keywords: [
            "three-body",
            "stillinger-weber",
            "vashishta",
            "angular",
            "many-body"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/threebody`,
    },
    {
        id: "tracker",
        name: "Interaction Tracking",
        category: "analysis",
        description: "Track interactions in LJ melt. Monitor particle interactions and dynamics.",
        path: "examples/tracker",
        files: [
            "in.track"
        ],
        keywords: [
            "tracker",
            "interactions",
            "lj",
            "melt",
            "monitoring"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/tracker`,
    },
    {
        id: "triclinic",
        name: "Triclinic Cells",
        category: "crystallography",
        description: "Simulations in triclinic unit cells with arbitrary lattice vectors. Handles complex crystal structures.",
        path: "examples/triclinic",
        files: [
            "in.sq2.primitive",
            "in.fcc.primitive",
            "in.hex.orthog",
            "in.hex.primitive",
            "in.bcc.primitive",
            "in.fcc.orthog",
            "in.sq2.orthog",
            "in.data.general",
            "in.bcc.orthog",
            "data.8Apr24.fcc.primitive.g++.4",
            "data.8Apr24.fcc.primitive.g++.1",
            "data.8Apr24.hex.orthog.g++.4",
            "data.general",
            "data.8Apr24.hex.primitive.g++.4",
            "data.8Apr24.bcc.primitive.g++.4",
            "data.8Apr24.hex.primitive.g++.1",
            "data.8Apr24.sq2.primitive.g++.4",
            "data.8Apr24.sq2.primitive.g++.1",
            "data.8Apr24.bcc.orthog.g++.4",
            "data.8Apr24.sq2.orthog.g++.1",
            "data.8Apr24.sq2.orthog.g++.4",
            "data.8Apr24.fcc.orthog.g++.1",
            "data.8Apr24.general.g++.1",
            "data.8Apr24.fcc.orthog.g++.4",
            "data.8Apr24.hex.orthog.g++.1",
            "data.8Apr24.general.g++.4",
            "data.8Apr24.bcc.primitive.g++.1",
            "data.8Apr24.bcc.orthog.g++.1"
        ],
        keywords: [
            "triclinic",
            "crystal",
            "lattice",
            "unit-cell",
            "crystallography"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/triclinic`,
    },
    {
        id: "ttm",
        name: "Two-Temperature Model",
        category: "thermodynamics",
        description: "Two-temperature model for electron-phonon coupling. Metal heating and thermal transport.",
        path: "examples/ttm",
        files: [
            "in.ttm.mod",
            "in.ttm.grid",
            "in.ttm"
        ],
        keywords: [
            "ttm",
            "two-temperature",
            "electron-phonon",
            "metal",
            "thermal"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ttm`,
    },
    {
        id: "vashishta",
        name: "Vashishta Potential",
        category: "materials",
        description: "Vashishta potential for ceramics and semiconductors. Three-body potential for complex materials.",
        path: "examples/vashishta",
        files: [
            "in.vashishta.table.sio2",
            "in.vashishta.table.inp",
            "in.vashishta.sio2",
            "in.vashishta.inp",
            "data.quartz"
        ],
        keywords: [
            "vashishta",
            "ceramics",
            "semiconductors",
            "three-body",
            "quartz"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/vashishta`,
    },
    {
        id: "voronoi",
        name: "Voronoi Tesselation",
        category: "analysis",
        description: "Voronoi tesselation via compute voronoi/atom command. Spatial analysis and structure.",
        path: "examples/voronoi",
        files: [
            "in.voronoi",
            "in.voronoi.2d",
            "in.voronoi.data"
        ],
        keywords: [
            "voronoi",
            "tesselation",
            "spatial",
            "analysis",
            "structure"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/voronoi`,
    },
    {
        id: "wall",
        name: "Wall Interactions",
        category: "boundaries",
        description: "Wall interactions and boundary conditions. Various wall types and interactions.",
        path: "examples/wall",
        files: [
            "in.wall.table",
            "in.wall.maxwell",
            "in.wall.diffusive",
            "in.wall.ccl",
            "in.wall.specular",
            "in.wall.lepton",
            "in.wall.flow"
        ],
        keywords: [
            "wall",
            "boundaries",
            "interactions",
            "sphere",
            "flow"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/wall`,
    },
    {
        id: "yaml",
        name: "YAML Configuration",
        category: "utility",
        description: "YAML-based configuration examples. Modern configuration and input formats.",
        path: "examples/yaml",
        files: [
            "in.yaml"
        ],
        keywords: [
            "yaml",
            "configuration",
            "input",
            "format",
            "modern"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/yaml`,
    },

    // UPPERCASE directory examples
    {
        id: "couple",
        name: "LAMMPS as Library",
        category: "coupling",
        description: "Examples of how to use LAMMPS as a library. Integration with other codes and applications.",
        path: "examples/COUPLE",
        files: [
            "simple/in.lj",
            "multiple/in.chain",
            "python/in.fix_external",
            "plugin/in.lj",
            "lammps_spparks/in.spparks",
            "lammps_spparks/in.lammps",
            "multiple/data.chain"
        ],
        keywords: [
            "library",
            "coupling",
            "integration",
            "api",
            "fortran",
            "cpp"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/COUPLE`,
    },
    {
        id: "diffuse",
        name: "Diffusion Coefficients",
        category: "transport",
        description: "Compute diffusion coefficients via several methods. Transport property calculations.",
        path: "examples/DIFFUSE",
        files: [
            "in.vacf.2d",
            "in.msd.2d"
        ],
        keywords: [
            "diffusion",
            "transport",
            "msd",
            "green-kubo",
            "coefficients"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/DIFFUSE`,
    },
    {
        id: "elastic",
        name: "Elastic Constants",
        category: "materials",
        description: "Calculate elastic constants and mechanical properties. Essential for materials characterization.",
        path: "examples/ELASTIC",
        files: [
            "in.elastic"
        ],
        keywords: [
            "elastic",
            "constants",
            "mechanical",
            "properties",
            "stiffness"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/ELASTIC`,
    },
    //     id: "elastic-t",
    //     name: "Elastic Constants (Finite T)",
    //     category: "materials",
    //     description: "Compute elastic constants at finite temperature. Temperature-dependent mechanical properties.",
    //     path: "examples/ELASTIC_T",
    //     files: [
    //         "in.elastic"
    //     ],
    //     keywords: [
    //         "elastic",
    //         "finite-temperature",
    //         "mechanical",
    //         "properties",
    //         "constants"
    //     ],
    //     gitHubUrl: `${BASE_GITHUB_URL}/examples/ELASTIC_T`,
    // },
    {
        id: "heat",
        name: "Thermal Conductivity (eHEX)",
        category: "transport",
        description: "Compute thermal conductivity for LJ and water via fix ehex. Heat transport methods.",
        path: "examples/HEAT",
        files: [
            "in.lj.hex",
            "in.lj.ehex",
            "in.spce.ehex",
            "in.spce.hex",
            "data.spce",
            "data.lj"
        ],
        keywords: [
            "thermal",
            "conductivity",
            "ehex",
            "heat",
            "transport"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/HEAT`,
    },
    {
        id: "kappa",
        name: "Thermal Conductivity Methods",
        category: "transport",
        description: "Compute thermal conductivity via several methods. Comprehensive heat transport analysis.",
        path: "examples/KAPPA",
        files: [
            "in.heat",
            "in.ehex",
            "in.heatflux",
            "in.langevin",
            "in.mp"
        ],
        keywords: [
            "kappa",
            "thermal",
            "conductivity",
            "nemd",
            "green-kubo",
            "muller-plathe"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/KAPPA`,
    },
    {
        id: "mc-loop",
        name: "Monte Carlo Loop",
        category: "monte-carlo",
        description: "Using LAMMPS in a Monte Carlo mode to relax the energy of a system in a input script loop.",
        path: "examples/MC-LOOP",
        files: [
            "in.mc"
        ],
        keywords: [
            "monte-carlo",
            "loop",
            "energy",
            "relaxation",
            "optimization"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/MC-LOOP`,
    },
    // QUANTUM subdirectories - separate entries for different QM codes
    {
        id: "quantum-latte",
        name: "QUANTUM: LATTE",
        category: "quantum",
        description: "LATTE quantum code integration examples. Density functional tight-binding calculations.",
        path: "examples/QUANTUM/LATTE",
        files: [
            "in.graphene",
            "in.series",
            "in.water.min",
            "in.ch4",
            "in.uo2.plugin",
            "in.series.plugin",
            "in.water.plugin",
            "in.uo2",
            "in.ch4.plugin",
            "in.water",
            "in.graphene.plugin",
            "in.sucrose",
            "in.water.min.plugin",
            "in.sucrose.plugin",
            "data.graphene",
            "data.ch4",
            "data.3uo2",
            "data.water",
            "data.sucrose",
            "data.2uo2",
            "data.4uo2"
        ],
        keywords: [
            "quantum",
            "latte",
            "dftb",
            "tight-binding",
            "graphene"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/QUANTUM/LATTE`,
    },
    {
        id: "quantum-pyscf",
        name: "QUANTUM: PySCF",
        category: "quantum",
        description: "PySCF quantum code integration examples. Python-based quantum chemistry calculations.",
        path: "examples/QUANTUM/PySCF",
        files: [
            "in.water.qmmm",
            "in.mixture.qmmm",
            "in.mixture.qmmm.plugin",
            "in.mixture.mm",
            "in.water.qmmm.plugin",
            "data.mixture",
            "data.water"
        ],
        keywords: [
            "quantum",
            "pyscf",
            "python",
            "qmmm",
            "chemistry"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/QUANTUM/PySCF`,
    },
    {
        id: "quantum-nwchem",
        name: "QUANTUM: NWChem",
        category: "quantum",
        description: "NWChem quantum code integration examples. High-performance computational chemistry.",
        path: "examples/QUANTUM/NWChem",
        files: [
            "in.zeolite.qmmm.plugin",
            "in.series",
            "in.water.qmmm",
            "in.series.plugin",
            "in.zeolite.mm",
            "in.water.mm",
            "in.water.qmmm.plugin",
            "in.zeolite.qmmm",
            "data.w.fcc_001",
            "data.w.bcc_222",
            "data.w.bcc",
            "data.w.diamond",
            "data.water.mm",
            "data.zeolite",
            "data.w.sc_001",
            "data.water.qmmm"
        ],
        keywords: [
            "quantum",
            "nwchem",
            "computational-chemistry",
            "qmmm",
            "zeolite"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/QUANTUM/NWChem`,
    },
    // SPIN subdirectories - separate entries for different magnetic systems
    {
        id: "spin-iron",
        name: "SPIN: Iron Magnetic Systems",
        category: "magnetic",
        description: "Spin dynamics in iron systems. Magnetic behavior of iron lattices.",
        path: "examples/SPIN/iron",
        files: [
            "in.spin.iron_cubic",
            "in.spin.iron"
        ],
        keywords: [
            "spin",
            "iron",
            "magnetic",
            "dynamics",
            "bcc"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/SPIN/iron`,
    },
    {
        id: "spin-nickel",
        name: "SPIN: Nickel Magnetic Systems",
        category: "magnetic",
        description: "Spin dynamics in nickel systems. Magnetic properties of nickel lattices.",
        path: "examples/SPIN/nickel",
        files: [
            "in.spin.nickel_cubic",
            "in.spin.nickel"
        ],
        keywords: [
            "spin",
            "nickel",
            "magnetic",
            "dynamics",
            "fcc"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/SPIN/nickel`,
    },
    {
        id: "spin-bfo",
        name: "SPIN: BiFeO3 Multiferroic",
        category: "magnetic",
        description: "Spin dynamics in bismuth ferrite (BiFeO3). Multiferroic material properties.",
        path: "examples/SPIN/bfo",
        files: [
            "in.spin.bfo"
        ],
        keywords: [
            "spin",
            "bfo",
            "multiferroic",
            "bismuth",
            "ferrite"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/SPIN/bfo`,
    },
    {
        id: "spin-cobalt-fcc",
        name: "SPIN: Cobalt FCC",
        category: "magnetic",
        description: "Spin dynamics in cobalt FCC structure. Face-centered cubic cobalt magnetism.",
        path: "examples/SPIN/cobalt_fcc",
        files: [
            "in.spin.cobalt_fcc"
        ],
        keywords: [
            "spin",
            "cobalt",
            "fcc",
            "magnetic",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/SPIN/cobalt_fcc`,
    },
    {
        id: "spin-cobalt-hcp",
        name: "SPIN: Cobalt HCP",
        category: "magnetic",
        description: "Spin dynamics in cobalt HCP structure. Hexagonal close-packed cobalt magnetism.",
        path: "examples/SPIN/cobalt_hcp",
        files: [
            "in.spin.cobalt_hcp"
        ],
        keywords: [
            "spin",
            "cobalt",
            "hcp",
            "magnetic",
            "anisotropy"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/SPIN/cobalt_hcp`,
    },
    {
        id: "units",
        name: "Unit System Comparisons",
        category: "units",
        description: "Examples that run the same simulation in lj, real, metal units. Unit system demonstrations.",
        path: "examples/UNITS",
        files: [
            "in.ar.real",
            "in.ar.lj",
            "in.ar.metal"
        ],
        keywords: [
            "units",
            "lj",
            "real",
            "metal",
            "comparison",
            "systems"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/UNITS`,
    },
    {
        id: "viscosity",
        name: "Viscosity Calculations",
        category: "transport",
        description: "Compute viscosity via several methods. Comprehensive viscosity analysis techniques.",
        path: "examples/VISCOSITY",
        files: [
            "in.cos.1000SPCE",
            "in.nemd.2d",
            "in.wall.2d",
            "in.gk.2d",
            "in.mp.2d",
            "in.einstein.2d",
            "data.cos.1000SPCE"
        ],
        keywords: [
            "viscosity",
            "transport",
            "nemd",
            "green-kubo",
            "muller-plathe",
            "rheology"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/VISCOSITY`,
    },

    // RHEO subdirectories
    {
        id: "rheo-poiseuille",
        name: "RHEO Poiseuille Flow",
        category: "fluid",
        description: "RHEO Poiseuille flow simulation. Channel flow using smoothed particle hydrodynamics.",
        path: "examples/rheo/poiseuille",
        files: [
            "in.rheo.poiseuille"
        ],
        keywords: [
            "rheo",
            "poiseuille",
            "flow",
            "sph",
            "channel"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/poiseuille`,
    },
    {
        id: "rheo-oxidation",
        name: "RHEO Oxidation",
        category: "reactive",
        description: "RHEO oxidation process simulation. Reactive fluid dynamics.",
        path: "examples/rheo/oxidation",
        files: [
            "in.rheo.oxidation"
        ],
        keywords: [
            "rheo",
            "oxidation",
            "reactive",
            "fluid",
            "chemistry"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/oxidation`,
    },
    {
        id: "rheo-ice-cubes",
        name: "RHEO Ice Cubes",
        category: "phase-transitions",
        description: "RHEO ice cubes melting simulation. Phase change dynamics.",
        path: "examples/rheo/ice-cubes",
        files: [
            "in.rheo.ice.cubes"
        ],
        keywords: [
            "rheo",
            "ice",
            "melting",
            "phase-change",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/ice-cubes`,
    },
    {
        id: "rheo-taylor-green",
        name: "RHEO Taylor-Green Vortex",
        category: "fluid",
        description: "RHEO Taylor-Green vortex simulation. Turbulence and vorticity dynamics.",
        path: "examples/rheo/taylor-green",
        files: [
            "in.rheo.taylor.green"
        ],
        keywords: [
            "rheo",
            "taylor-green",
            "vortex",
            "turbulence",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/taylor-green`,
    },
    {
        id: "rheo-balloon",
        name: "RHEO Balloon",
        category: "soft-matter",
        description: "RHEO balloon inflation simulation. Membrane mechanics and deformation.",
        path: "examples/rheo/balloon",
        files: [
            "in.rheo.balloon"
        ],
        keywords: [
            "rheo",
            "balloon",
            "membrane",
            "inflation",
            "deformation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/balloon`,
    },
    {
        id: "rheo-dam-break",
        name: "RHEO Dam Break",
        category: "fluid",
        description: "RHEO dam break simulation. Free surface flow dynamics.",
        path: "examples/rheo/dam-break",
        files: [
            "in.rheo.dam.break"
        ],
        keywords: [
            "rheo",
            "dam-break",
            "free-surface",
            "flow",
            "dynamics"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/rheo/dam-break`,
    },

    // Key PACKAGES examples - each subdirectory as separate entry
    {
        id: "packages-addtorque",
        name: "PACKAGES: Add Torque",
        category: "torque",
        description: "Package example for addtorque functionality. Apply torques to particles.",
        path: "examples/PACKAGES/addtorque",
        files: [
            "in.addtorque"
        ],
        keywords: [
            "packages",
            "addtorque",
            "torque",
            "rotation"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/addtorque`,
    },
    {
        id: "packages-agni",
        name: "PACKAGES: AGNI Neural Network",
        category: "machine-learning",
        description: "AGNI neural network potential examples. Machine learning interatomic potentials.",
        path: "examples/PACKAGES/agni",
        files: [
            "in.adatom",
            "in.vacancy"
        ],
        keywords: [
            "packages",
            "agni",
            "neural-network",
            "machine-learning",
            "potential"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/agni`,
    },
    {
        id: "packages-alchemy",
        name: "PACKAGES: Alchemy",
        category: "free-energy",
        description: "Alchemy package for free energy calculations. Thermodynamic integration methods.",
        path: "examples/PACKAGES/alchemy",
        files: [
            "in.twowater",
            "in.alloy"
        ],
        keywords: [
            "packages",
            "alchemy",
            "free-energy",
            "thermodynamic",
            "integration"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/alchemy`,
    },
    // PACKAGES: ATC - Split into separate entries for different ATC methods
    {
        id: "packages-atc-thermal",
        name: "PACKAGES: ATC Thermal",
        category: "multiscale",
        description: "ATC thermal coupling examples. Heat transfer between atomistic and continuum regions.",
        path: "examples/PACKAGES/atc/thermal",
        files: [
            "in.no_atoms",
            "in.bar1d_combined",
            "in.bar1d_flux",
            "in.bar1d_hoover",
            "in.bar1d_lumped",
            "in.bar1d_interpolate",
            "in.bar1d_all_atoms",
            "in.bar1d_frac_step",
            "in.bar1d"
        ],
        keywords: [
            "packages",
            "atc",
            "thermal",
            "heat-transfer",
            "multiscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/atc/thermal`,
    },
    {
        id: "packages-atc-elastic",
        name: "PACKAGES: ATC Elastic",
        category: "multiscale",
        description: "ATC elastic coupling examples. Mechanical coupling between atomistic and continuum regions.",
        path: "examples/PACKAGES/atc/elastic",
        files: [
            "in.no_atoms",
            "in.electron_density",
            "in.eam_energy",
            "in.bar1d_flux",
            "in.bar1d_ghost_flux",
            "in.bar1d_thermo_elastic",
            "in.bar1d_damped",
            "in.no_atoms_cb_linear",
            "in.no_atoms_cb",
            "in.bar1d_frac_step",
            "in.bar1d"
        ],
        keywords: [
            "packages",
            "atc",
            "elastic",
            "mechanical",
            "multiscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/atc/elastic`,
    },
    {
        id: "packages-atc-hardy",
        name: "PACKAGES: ATC Hardy",
        category: "multiscale",
        description: "ATC Hardy stress calculations. Hardy stress formulation for multiscale coupling.",
        path: "examples/PACKAGES/atc/hardy",
        files: [
            "in.eam_unistrain_cell",
            "in.eshelby_static",
            "in.eam_unistrain_qsphere",
            "in.eam_unistrain_mesh",
            "in.consistency",
            "in.eam_unistrain_qcylinder",
            "in.eam_unistrain_step",
            "in.eam_kernel_convergence",
            "in.nvt",
            "in.eam_volume_stretch"
        ],
        keywords: [
            "packages",
            "atc",
            "hardy",
            "stress",
            "multiscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/atc/hardy`,
    },
    {
        id: "packages-atc-fluids",
        name: "PACKAGES: ATC Fluids",
        category: "multiscale",
        description: "ATC fluid coupling examples. Fluid dynamics with atomistic-continuum coupling.",
        path: "examples/PACKAGES/atc/fluids",
        files: [
            "in.shear_flow",
            "in.concentration",
            "in.opp_force",
            "in.poisson",
            "in.double_layer",
            "in.dielectric_interface",
            "in.conducting_interface",
            "in.bar1d_fluids",
            "in.liquid_electrostatic",
            "in.shear_no_atoms"
        ],
        keywords: [
            "packages",
            "atc",
            "fluids",
            "hydrodynamics",
            "multiscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/atc/fluids`,
    },
    {
        id: "packages-atc-two-temperature",
        name: "PACKAGES: ATC Two Temperature",
        category: "multiscale",
        description: "ATC two-temperature model examples. Electron-phonon coupling with continuum regions.",
        path: "examples/PACKAGES/atc/two_temperature",
        files: [
            "in.no_atoms",
            "in.restart",
            "in.uniform_exchange",
            "in.uniform_heating",
            "in.cutout",
            "in.bar1d_ttm",
            "in.gaussianIC_ttm"
        ],
        keywords: [
            "packages",
            "atc",
            "two-temperature",
            "electron-phonon",
            "multiscale"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/atc/two_temperature`,
    },
    // PACKAGES: CGDNA - Split into separate entries for different DNA types and unit systems
    {
        id: "packages-cgdna-oxdna-real",
        name: "PACKAGES: oxDNA (Real Units)",
        category: "biological",
        description: "oxDNA coarse-grained DNA model examples in real units. Basic DNA duplex simulations.",
        path: "examples/PACKAGES/cgdna/examples/real_units/oxDNA",
        files: [
            "duplex1/in.duplex1",
            "duplex1/data.duplex1",
            "potential_file/in.duplex1",
            "potential_file/data.duplex1",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxdna",
            "dna",
            "real-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/real_units/oxDNA`,
    },
    {
        id: "packages-cgdna-oxdna2-real",
        name: "PACKAGES: oxDNA2 (Real Units)",
        category: "biological",
        description: "oxDNA2 improved coarse-grained DNA model in real units. Advanced DNA simulations.",
        path: "examples/PACKAGES/cgdna/examples/real_units/oxDNA2",
        files: [
            "unique_bp/in.duplex4.8type",
            "unique_bp/data.duplex4.4type",
            "unique_bp/data.duplex4.8type",
            "unique_bp/in.duplex4.4type",
            "duplex1/in.duplex1",
            "duplex1/data.duplex1",
            "potential_file/in.duplex1",
            "potential_file/data.duplex1",
            "duplex3/in.duplex3",
            "duplex3/data.duplex3",
            "dsring/data.dsring",
            "dsring/in.dsring",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxdna2",
            "dna",
            "real-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/real_units/oxDNA2`,
    },
    {
        id: "packages-cgdna-oxrna2-real",
        name: "PACKAGES: oxRNA2 (Real Units)",
        category: "biological",
        description: "oxRNA2 coarse-grained RNA model in real units. RNA duplex simulations.",
        path: "examples/PACKAGES/cgdna/examples/real_units/oxRNA2",
        files: [
            "potential_file/in.duplex2",
            "potential_file/data.duplex2",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxrna2",
            "rna",
            "real-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/real_units/oxRNA2`,
    },
    {
        id: "packages-cgdna-oxdna-lj",
        name: "PACKAGES: oxDNA (LJ Units)",
        category: "biological",
        description: "oxDNA coarse-grained DNA model examples in LJ units. Reduced unit simulations.",
        path: "examples/PACKAGES/cgdna/examples/lj_units/oxDNA",
        files: [
            "duplex1/in.duplex1",
            "duplex1/data.duplex1",
            "potential_file/in.duplex1",
            "potential_file/data.duplex1",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxdna",
            "dna",
            "lj-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/lj_units/oxDNA`,
    },
    {
        id: "packages-cgdna-oxdna2-lj",
        name: "PACKAGES: oxDNA2 (LJ Units)",
        category: "biological",
        description: "oxDNA2 improved coarse-grained DNA model in LJ units. Reduced unit simulations.",
        path: "examples/PACKAGES/cgdna/examples/lj_units/oxDNA2",
        files: [
            "unique_bp/in.duplex4.8type",
            "unique_bp/data.duplex4.4type",
            "unique_bp/data.duplex4.8type",
            "unique_bp/in.duplex4.4type",
            "duplex1/in.duplex1",
            "duplex1/data.duplex1",
            "potential_file/in.duplex1",
            "potential_file/data.duplex1",
            "duplex3/in.duplex3",
            "duplex3/data.duplex3",
            "dsring/data.dsring",
            "dsring/in.dsring",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxdna2",
            "dna",
            "lj-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/lj_units/oxDNA2`,
    },
    {
        id: "packages-cgdna-oxrna2-lj",
        name: "PACKAGES: oxRNA2 (LJ Units)",
        category: "biological",
        description: "oxRNA2 coarse-grained RNA model in LJ units. RNA duplex simulations.",
        path: "examples/PACKAGES/cgdna/examples/lj_units/oxRNA2",
        files: [
            "potential_file/in.duplex2",
            "potential_file/data.duplex2",
            "duplex2/in.duplex2",
            "duplex2/data.duplex2"
        ],
        keywords: [
            "packages",
            "cgdna",
            "oxrna2",
            "rna",
            "lj-units",
            "duplex"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/cgdna/examples/lj_units/oxRNA2`,
    },
    {
        id: "packages-colvars",
        name: "PACKAGES: Collective Variables",
        category: "enhanced-sampling",
        description: "Collective variables package for enhanced sampling. Biased molecular dynamics.",
        path: "examples/PACKAGES/colvars",
        files: [
            "in.peptide-colvars2",
            "in.peptide-spring2",
            "in.peptide-spring",
            "in.peptide-colvars",
            "data.peptide"
        ],
        keywords: [
            "packages",
            "colvars",
            "collective-variables",
            "enhanced-sampling",
            "bias"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/colvars`,
    },
    {
        id: "packages-drude",
        name: "PACKAGES: Drude Oscillators",
        category: "polarizable",
        description: "Drude oscillator model for polarizable force fields. Electronic polarization effects.",
        path: "examples/PACKAGES/drude",
        files: [
            "ethanol/in.ethanol.tgnh",
            "swm4-ndp/in.swm4-ndp.lang",
            "toluene/in.toluene.nh",
            "butane/in.butane.lang"
        ],
        keywords: [
            "packages",
            "drude",
            "polarizable",
            "oscillators",
            "polarization"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/drude`,
    },
    {
        id: "packages-eff",
        name: "PACKAGES: Electron Force Field",
        category: "quantum",
        description: "Electron Force Field (eFF) for quantum effects. Electronic degrees of freedom.",
        path: "examples/PACKAGES/eff",
        files: [
            "H2/in.h2",
            "CH4/in.ch4.dynamics",
            "Li-solid/in.Li.bohr",
            "fixed-core/CH4/in.CH4fc.ang"
        ],
        keywords: [
            "packages",
            "eff",
            "electron",
            "quantum",
            "electronic"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/eff`,
    },
    {
        id: "packages-electrode",
        name: "PACKAGES: Electrode",
        category: "electrostatics",
        description: "Electrode package for electrochemical simulations. Constant potential methods.",
        path: "examples/PACKAGES/electrode",
        files: [
            "au-aq/in.ffield",
            "piston/in.piston",
            "planar/in.planar-ewald-ew2d",
            "graph-il/in.etypes"
        ],
        keywords: [
            "packages",
            "electrode",
            "electrochemical",
            "constant-potential",
            "electrolyte"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/electrode`,
    },
    {
        id: "packages-fep",
        name: "PACKAGES: Free Energy Perturbation",
        category: "free-energy",
        description: "Free Energy Perturbation (FEP) package. Thermodynamic cycle calculations.",
        path: "examples/PACKAGES/fep",
        files: [
            "CH4hyd/fdti01/in.fdti01.lmp",
            "CH4-CF4/fep10/in.fep10.lmp",
            "ta/in.spce.lmp",
            "C7inEthanol/fep10/in.deletion"
        ],
        keywords: [
            "packages",
            "fep",
            "free-energy",
            "perturbation",
            "thermodynamic"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/fep`,
    },
    {
        id: "packages-hdnnp",
        name: "PACKAGES: High-Dimensional Neural Network",
        category: "machine-learning",
        description: "High-dimensional neural network potentials. Advanced ML interatomic potentials.",
        path: "examples/PACKAGES/hdnnp",
        files: [
            "in.hybrid",
            "in.hdnnp",
            "data.H2O-360mol"
        ],
        keywords: [
            "packages",
            "hdnnp",
            "neural-network",
            "machine-learning",
            "high-dimensional"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/hdnnp`,
    },
    {
        id: "packages-phonon",
        name: "PACKAGES: Phonon",
        category: "analysis",
        description: "Phonon calculation package. Vibrational properties and lattice dynamics.",
        path: "examples/PACKAGES/phonon",
        files: [
            "3-3D-FCC-Cu-EAM/in.EAM3D",
            "2-1D-diatomic/in.disp",
            "1-1D-mono/in.Ana",
            "4-Graphene/in.graphene"
        ],
        keywords: [
            "packages",
            "phonon",
            "vibrational",
            "lattice-dynamics",
            "spectroscopy"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/phonon`,
    },
    {
        id: "packages-pimd",
        name: "PACKAGES: Path Integral MD",
        category: "quantum",
        description: "Path Integral Molecular Dynamics. Quantum nuclear effects and tunneling.",
        path: "examples/PACKAGES/pimd",
        files: [
            "prot-hairpin/in.scp",
            "para-h2/in.scp",
            "langevin_reduced_units/in.lmp",
            "langevin_metal_units/in.pimd-langevin.metal"
        ],
        keywords: [
            "packages",
            "pimd",
            "path-integral",
            "quantum",
            "nuclear-effects"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/pimd`,
    },
    {
        id: "packages-plumed",
        name: "PACKAGES: PLUMED",
        category: "enhanced-sampling",
        description: "PLUMED integration for enhanced sampling. Metadynamics and collective variables.",
        path: "examples/PACKAGES/plumed",
        files: [
            "in.peptide-plumed",
            "data.peptide"
        ],
        keywords: [
            "packages",
            "plumed",
            "enhanced-sampling",
            "metadynamics",
            "collective-variables"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/plumed`,
    },
    {
        id: "packages-qtb",
        name: "PACKAGES: Quantum Thermal Bath",
        category: "quantum",
        description: "Quantum Thermal Bath methods. Quantum effects in thermostats.",
        path: "examples/PACKAGES/qtb",
        files: [
            "alpha_quartz_qbmsst/in.alpha_quartz_qbmsst",
            "methane_qbmsst/in.methane_qbmsst",
            "methane_qtb/in.methane_qtb",
            "alpha_quartz_qtb/in.alpha_quartz_qtb"
        ],
        keywords: [
            "packages",
            "qtb",
            "quantum",
            "thermal-bath",
            "thermostat"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/qtb`,
    },
    {
        id: "packages-reaction",
        name: "PACKAGES: Reaction",
        category: "reactive",
        description: "Reaction package for bond breaking/forming. Dynamic bond topology changes.",
        path: "examples/PACKAGES/reaction",
        files: [
            "tiny_polystyrene/in.tiny_polystyrene.stabilized",
            "tiny_nylon/in.tiny_nylon.stabilized",
            "tiny_epoxy/in.tiny_epoxy.stabilized",
            "create_atoms_polystyrene/in.grow_styrene"
        ],
        keywords: [
            "packages",
            "reaction",
            "bonds",
            "topology",
            "chemistry"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/PACKAGES/reaction`,
    },
    // ReaxFF subdirectories - separate entries for each chemical system
    {
        id: "packages-reaxff-cho",
        name: "PACKAGES: ReaxFF CHO",
        category: "reactive",
        description: "ReaxFF CHO system examples. Carbon-hydrogen-oxygen reactive chemistry.",
        path: "examples/reaxff/CHO",
        files: [
            "in.CHO",
            "data.CHO"
        ],
        keywords: [
            "packages",
            "reaxff",
            "cho",
            "carbon",
            "hydrogen",
            "oxygen"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/reaxff/CHO`,
    },
    {
        id: "packages-reaxff-rdx",
        name: "PACKAGES: ReaxFF RDX",
        category: "reactive",
        description: "ReaxFF RDX explosive examples. Reactive dynamics of explosive materials.",
        path: "examples/reaxff/RDX",
        files: [
            "in.RDX",
            "data.RDX"
        ],
        keywords: [
            "packages",
            "reaxff",
            "rdx",
            "explosive",
            "reactive"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/reaxff/RDX`,
    },
    {
        id: "packages-reaxff-water",
        name: "PACKAGES: ReaxFF Water",
        category: "reactive",
        description: "ReaxFF water system examples. Reactive water chemistry and dissociation.",
        path: "examples/reaxff/water",
        files: [
            "in.water.qtpie.field",
            "in.water.qeq.field",
            "in.water.acks2",
            "in.water.qeqr.field",
            "in.water.qeq",
            "in.water.qtpie",
            "in.water.acks2.field",
            "in.water.qeqr",
            "data.water"
        ],
        keywords: [
            "packages",
            "reaxff",
            "water",
            "dissociation",
            "reactive"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/reaxff/water`,
    },
    {
        id: "packages-reaxff-znoh2",
        name: "PACKAGES: ReaxFF ZnOH2",
        category: "reactive",
        description: "ReaxFF zinc hydroxide examples. Metal-oxide reactive chemistry.",
        path: "examples/reaxff/ZnOH2",
        files: [
            "in.ZnOH2",
            "data.ZnOH2"
        ],
        keywords: [
            "packages",
            "reaxff",
            "zinc",
            "hydroxide",
            "metal-oxide"
        ],
        gitHubUrl: `${BASE_GITHUB_URL}/examples/reaxff/ZnOH2`,
    },
]

