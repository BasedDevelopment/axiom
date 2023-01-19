export interface User {
  created: string;
  email: string;
  id: string; // uuid
  last_login: string;
  name: string;
  updated: string;
}

export interface Container {
  hypervisor: string;
  vm: {
    id: string;
    hv: string;
    hostname: string;
    user: string;
    cpu: number;
    memory: number;
    nics: null;
    storages: null;
    created: Date;
    updated: Date;
    remarks: string;
    state: number;
    state_str: string;
    state_reason: string;
  };
}
