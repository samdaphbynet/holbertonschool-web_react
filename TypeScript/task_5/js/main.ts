// 10. Brand convention & Nominal typing

export interface MajorCredits {
    credits: number;
    _brand: "Major"
}

export interface MinorCredits {
    credits: number;
    _brand: "Minor"
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sum = subject1.credits + subject2.credits;
    const object: MajorCredits = {
        credits: sum,
        _brand: "Major"
    }

    return object;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sum = subject1.credits + subject2.credits;
    const object: MinorCredits = {
        credits: sum,
        _brand: "Minor"
    }

    return object;
}