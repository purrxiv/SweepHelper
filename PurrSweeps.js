const Districts = Object.freeze({
    LAVENDER_BEDS: 1,
    MIST: 2,
    GOBLET: 3,
    SHIROGANE: 4,
    EMPYREUM: 5
});

const Sizes = Object.freeze({
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3
});

const plotSizeDirectory = {
    LavenderBeds: {
        Larges: [3, 6, 28, 33, 36, 58],
        Mediums: [1, 5, 11, 16, 21, 27, 30, 31, 35, 41, 46, 51, 57, 60]
    },
    Mist: {
        Larges: [2, 5, 15, 32, 35, 45],
        Mediums: [1, 4, 6, 7, 14, 29, 30, 31, 34, 36, 37, 44, 59, 60]
    },
    Goblet: {
        Larges: [5, 13, 30, 35, 43, 60],
        Mediums: [4, 6, 8, 11, 12, 19, 25, 34, 36, 38, 41, 42, 49, 55]
    },
    Shirogane: {
        Larges: [7, 16, 30, 37, 46, 60],
        Mediums: [1, 8, 13, 15, 19, 24, 28, 31, 38, 43, 45, 49, 54, 58]
    },
    Empyreum: {
        Larges: [12, 22, 30, 42, 52, 60],
        Mediums: [2, 7, 8, 17, 18, 21, 26, 32, 37, 38, 47, 48, 51, 56]
    }
};

const wardDistributionDirectory = {
    Normal: {
        FC: [1,2,3,4,5,6,25],
        Personal: [21,22,23,24,30],
        Mixed: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,27,28,29]
    },
    Dynamis: {
        FC: [1,2,3,4,5,6,25],
        Personal: [21,22,23,24,30],
        Mixed: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,26,27,28,29]
    }
}

let sweepData = {
    LavenderBeds: [],
    Mist: [],
    Goblet: [],
    Shirogane: [],
    Empyreum: []
};

function addPlotToSweep(district, ward, plot) {
    let size = -1;
    switch (district) {
        case Districts.LAVENDER_BEDS:
            if (plotSizeDirectory.LavenderBeds.Larges.includes(plot)) {
                size = Sizes.LARGE;
            } else if (plotSizeDirectory.LavenderBeds.Mediums.includes(plot)) {
                size = Sizes.MEDIUM;
            } else {
                size = Sizes.SMALL;
            }
            sweepData.LavenderBeds.push({size: size, ward: ward, plot: plot});
            sweepData.LavenderBeds.sort(function (a, b) {
                return a.ward - b.ward || a.plot - b.plot;
            });
            break;
        case Districts.MIST:
            if (plotSizeDirectory.Mist.Larges.includes(plot)) {
                size = Sizes.LARGE;
            } else if (plotSizeDirectory.Mist.Mediums.includes(plot)) {
                size = Sizes.MEDIUM;
            } else {
                size = Sizes.SMALL;
            }
            sweepData.Mist.push({size: size, ward: ward, plot: plot});
            sweepData.Mist.sort(function (a, b) {
                return a.ward - b.ward || a.plot - b.plot;
            });
            break;
        case Districts.GOBLET:
            if (plotSizeDirectory.Goblet.Larges.includes(plot)) {
                size = Sizes.LARGE;
            } else if (plotSizeDirectory.Goblet.Mediums.includes(plot)) {
                size = Sizes.MEDIUM;
            } else {
                size = Sizes.SMALL;
            }
            sweepData.Goblet.push({size: size, ward: ward, plot: plot});
            sweepData.Goblet.sort(function (a, b) {
                return a.ward - b.ward || a.plot - b.plot;
            });
            break;
        case Districts.SHIROGANE:
            if (plotSizeDirectory.Shirogane.Larges.includes(plot)) {
                size = Sizes.LARGE;
            } else if (plotSizeDirectory.Shirogane.Mediums.includes(plot)) {
                size = Sizes.MEDIUM;
            } else {
                size = Sizes.SMALL;
            }
            sweepData.Shirogane.push({size: size, ward: ward, plot: plot});
            sweepData.Shirogane.sort(function (a, b) {
                return a.ward - b.ward || a.plot - b.plot;
            });
            break;
        case Districts.EMPYREUM:
            if (plotSizeDirectory.Empyreum.Larges.includes(plot)) {
                size = Sizes.LARGE;
            } else if (plotSizeDirectory.Empyreum.Mediums.includes(plot)) {
                size = Sizes.MEDIUM;
            } else {
                size = Sizes.SMALL;
            }
            sweepData.Empyreum.push({size: size, ward: ward, plot: plot});
            sweepData.Empyreum.sort(function (a, b) {
                return a.ward - b.ward || a.plot - b.plot;
            });
            break;
    }
}

function buildOutputString(isDynamis) {
    let outputString = "";
    for (let i = 0; i < sweepData.LavenderBeds.length; i++) {
        let line = "";
        if (isDynamis) {
            if (wardDistributionDirectory.Dynamis.FC.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Personal.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Mixed.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsFC @LargeLavenderBedsPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsFC @MediumLavenderBedsPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsFC @SmallLavenderBedsPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Dynamis ward ".concat(sweepData.LavenderBeds[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        } else {
            if (wardDistributionDirectory.Normal.FC.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Personal.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Mixed.includes(sweepData.LavenderBeds[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeLavenderBedsFC @LargeLavenderBedsPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumLavenderBedsFC @MediumLavenderBedsPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallLavenderBedsFC @SmallLavenderBedsPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Normal ward ".concat(sweepData.LavenderBeds[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        }
        line = line.concat("W");
        line = line.concat(sweepData.LavenderBeds[i].ward.toString());
        line = line.concat("-")
        line = line.concat("P");
        line = line.concat(sweepData.LavenderBeds[i].plot.toString());
        line = line.concat("\n");
        outputString = outputString.concat(line);
    }

    if (sweepData.LavenderBeds.length > 0){
        outputString = outputString.concat("\n");
    }

    for (let i = 0; i < sweepData.Mist.length; i++) {
        let line = "";
        if (isDynamis) {
            if (wardDistributionDirectory.Dynamis.FC.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.Mist[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Personal.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.Mist[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Mixed.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.Mist[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistFC @LargeMistPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistFC @MediumMistPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistFC @SmallMistPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Dynamis ward ".concat(sweepData.LavenderBeds[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        } else {
            if (wardDistributionDirectory.Normal.FC.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.Mist[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Personal.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.Mist[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Mixed.includes(sweepData.Mist[i].ward)) {
                switch (sweepData.LavenderBeds[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeMistFC @LargeMistPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumMistFC @MediumMistPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallMistFC @SmallMistPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Normal ward ".concat(sweepData.LavenderBeds[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        }
        line = line.concat("W");
        line = line.concat(sweepData.Mist[i].ward.toString());
        line = line.concat("-")
        line = line.concat("P");
        line = line.concat(sweepData.Mist[i].plot.toString());
        line = line.concat("\n");
        outputString = outputString.concat(line);
    }

    if (sweepData.Mist.length > 0){
        outputString = outputString.concat("\n");
    }

    for (let i = 0; i < sweepData.Goblet.length; i++) {
        let line = "";
        if (isDynamis) {
            if (wardDistributionDirectory.Dynamis.FC.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Personal.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Mixed.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletFC @LargeGobletPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletFC @MediumGobletPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletFC @SmallGobletPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Dynamis ward ".concat(sweepData.Goblet[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        } else {
            if (wardDistributionDirectory.Normal.FC.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Personal.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Mixed.includes(sweepData.Goblet[i].ward)) {
                switch (sweepData.Goblet[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeGobletFC @LargeGobletPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumGobletFC @MediumGobletPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallGobletFC @SmallGobletPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Normal ward ".concat(sweepData.Goblet[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        }
        line = line.concat("W");
        line = line.concat(sweepData.Goblet[i].ward.toString());
        line = line.concat("-")
        line = line.concat("P");
        line = line.concat(sweepData.Goblet[i].plot.toString());
        line = line.concat("\n");
        outputString = outputString.concat(line);
    }

    if (sweepData.Goblet.length > 0){
        outputString = outputString.concat("\n");
    }

    for (let i = 0; i < sweepData.Shirogane.length; i++) {
        let line = "";
        if (isDynamis) {
            if (wardDistributionDirectory.Dynamis.FC.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganeFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganeFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganeFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Personal.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganePersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganePersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganePersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Mixed.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganeFC @LargeShiroganePersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganeFC @MediumShiroganePersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganeFC @SmallShiroganePersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Dynamis ward ".concat(sweepData.Shirogane[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        } else {
            if (wardDistributionDirectory.Normal.FC.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganeFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganeFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganeFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Personal.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganePersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganePersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganePersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Mixed.includes(sweepData.Shirogane[i].ward)) {
                switch (sweepData.Shirogane[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeShiroganeFC @LargeShiroganePersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumShiroganeFC @MediumShiroganePersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallShiroganeFC @SmallShiroganePersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Normal ward ".concat(sweepData.Shirogane[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        }
        line = line.concat("W");
        line = line.concat(sweepData.Shirogane[i].ward.toString());
        line = line.concat("-")
        line = line.concat("P");
        line = line.concat(sweepData.Shirogane[i].plot.toString());
        line = line.concat("\n");
        outputString = outputString.concat(line);
    }

    if (sweepData.Shirogane.length > 0){
        outputString = outputString.concat("\n");
    }

    for (let i = 0; i < sweepData.Empyreum.length; i++) {
        let line = "";
        if (isDynamis) {
            if (wardDistributionDirectory.Dynamis.FC.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Personal.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Dynamis.Mixed.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumFC @LargeEmpyreumPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumFC @MediumEmpyreumPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumFC @SmallEmpyreumPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Dynamis ward ".concat(sweepData.Empyreum[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        } else {
            if (wardDistributionDirectory.Normal.FC.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumFC ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumFC ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumFC ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Personal.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumPersonal ");
                        break;
                }
            } else if (wardDistributionDirectory.Normal.Mixed.includes(sweepData.Empyreum[i].ward)) {
                switch (sweepData.Empyreum[i].size) {
                    case (Sizes.LARGE):
                        line = line.concat("@LargeEmpyreumFC @LargeEmpyreumPersonal ");
                        break;
                    case (Sizes.MEDIUM):
                        line = line.concat("@MediumEmpyreumFC @MediumEmpyreumPersonal ");
                        break;
                    case (Sizes.SMALL):
                        line = line.concat("@SmallEmpyreumFC @SmallEmpyreumPersonal ");
                        break;
                }
            } else { // this shouldn't happen
                console.error("Unknown if Normal ward ".concat(sweepData.Empyreum[i].ward.toString()).concat(" is FC, personal, or mixed"))
                line = "An error occurred."
            }
        }
        line = line.concat("W");
        line = line.concat(sweepData.Empyreum[i].ward.toString());
        line = line.concat("-")
        line = line.concat("P");
        line = line.concat(sweepData.Empyreum[i].plot.toString());
        line = line.concat("\n");
        outputString = outputString.concat(line);
    }

    return outputString;
}

