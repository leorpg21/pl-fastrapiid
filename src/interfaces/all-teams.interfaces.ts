export interface Teams {
    count:       number;
    filters:     Filters;
    competition: Competition;
    season:      Season;
    teams:       Team[];
}

export interface Competition {
    id:     number;
    name:   CompetitionName;
    code:   CompetitionCode;
    type:   Type;
    emblem: null | string;
}

export enum CompetitionCode {
    Cl = "CL",
    El = "EL",
    Fcwc = "FCWC",
    Pl = "PL",
    Ucl = "UCL",
}

export enum CompetitionName {
    FIFAClubWorldCup = "FIFA Club World Cup",
    PremierLeague = "Premier League",
    UEFAChampionsLeague = "UEFA Champions League",
    UEFAConferenceLeague = "UEFA Conference League",
    UEFAEuropaLeague = "UEFA Europa League",
}

export enum Type {
    Cup = "CUP",
    League = "LEAGUE",
}

export interface Filters {
    season: string;
}

export interface Season {
    id:              number;
    startDate:       Date;
    endDate:         Date;
    currentMatchday: number;
    winner:          null;
}

export interface Team {
    area:                Area;
    id:                  number;
    name:                string;
    shortName:           string;
    tla:                 string;
    crest:               string;
    address:             string;
    website:             string;
    founded:             number;
    clubColors:          string;
    venue:               string;
    runningCompetitions: Competition[];
    coach:               Coach;
    squad:               Squad[];
    staff:               any[];
    lastUpdated:         Date;
}

export interface Area {
    id:   number;
    name: AreaName;
    code: AreaCode;
    flag: string;
}

export enum AreaCode {
    Eng = "ENG",
}

export enum AreaName {
    England = "England",
}

export interface Coach {
    id:          number;
    firstName:   string;
    lastName:    string;
    name:        string;
    dateOfBirth: Date;
    nationality: string;
    contract:    Contract;
}

export interface Contract {
    start: string;
    until: string;
}

export interface Squad {
    id:          number;
    name:        string;
    position:    Position;
    dateOfBirth: Date | null;
    nationality: string;
}

export enum Position {
    AttackingMidfield = "Attacking Midfield",
    CentralMidfield = "Central Midfield",
    CentreBack = "Centre-Back",
    CentreForward = "Centre-Forward",
    Defence = "Defence",
    DefensiveMidfield = "Defensive Midfield",
    Goalkeeper = "Goalkeeper",
    LeftBack = "Left-Back",
    LeftMidfield = "Left Midfield",
    LeftWinger = "Left Winger",
    Midfield = "Midfield",
    Offence = "Offence",
    RightBack = "Right-Back",
    RightMidfield = "Right Midfield",
    RightWinger = "Right Winger",
}
