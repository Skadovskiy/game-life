const initState: boolean[][] = [
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, true, true, false, false, false, false, false],
    [false, false, false, true, false, false, false, false, false, false],
    [false, false, true, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false]
];

function NextLevelDevelopment(currentState: boolean[][]): boolean[][] {
    const height: number = currentState.length - 1;
    const region = [{ x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: -1 }, { x: 0, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 0 }, { x: 1, y: 1 }];

    const newState: boolean[][] =
        currentState.map(
            (row, y) =>
                row.map(
                    (isLivingCell, x) => {
                        const width: number = row.length - 1;
                        const toxicityLevel: number = region.map(
                            (r) => ({ x: (x + r.x), y: (y + r.y) }))
                            .filter(
                                (f) => f.y >= 0 && f.x >= 0 && f.y <= height && f.x <= width)
                            .reduce(
                                (sum, r) => sum + ((currentState[r.y][r.x]) ? 1 : 0), 0);

                        const isSurvivor: boolean = isLivingCell && (toxicityLevel == 2 || toxicityLevel == 3);
                        const isBirthCell: boolean = !isLivingCell && toxicityLevel == 3;

                        return isSurvivor || isBirthCell;
                    })
        )

    return newState;
}

NextLevelDevelopment(initState).forEach(
    (item) => console.log(item));