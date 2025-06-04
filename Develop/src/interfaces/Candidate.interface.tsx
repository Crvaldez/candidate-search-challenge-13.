// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string;              // or number, depending on API
    name: string;
    email: string;
    phone?: string;          // Optional if not always returned
    position: string;
    experience: number;      // Years of experience
    skills: string[];        // Array of skill names
    status: 'applied' | 'interviewing' | 'hired' | 'rejected'; // Enum-like union
    createdAt: string;       // ISO date string
    updatedAt?: string;      // Optional if not always included
  }
  