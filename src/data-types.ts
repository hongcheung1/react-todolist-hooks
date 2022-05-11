export interface TeamType {
    id: number;
    name: string;
    member_count?: number;
  }
  
  export interface MemberType {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    team: TeamType;
  }
  
  export interface TeamList {
    teams: TeamType[];
  }
  
  export interface MemberList {
    members: MemberType[];
  }