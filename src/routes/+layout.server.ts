import type { LayoutServerLoad } from './$types';

export interface User {
  created: string;
  email: string;
  id: string;
  last_login: string;
  name: string;
  updated: string;
}

interface Data {
  user: User;
  boxes: {
    name: string;
    vms: {
      id: string;
      name: string;
      ips: string[];
      box: string;
      status: string;
    }[];
  }[];
};

const boxes = [
  {
    name: 'box0',
    vms: [
      {
        id: 'fb575668-4056-4833-b605-7acd11947e34',
        name: 'jupiter',
        ips: ['134.195.121.106', 'fe80::303b:38ff:fe03:b92d'],
        box: 'box0',
        status: 'ON',
      },
      {
        id: 'a720cb20-da1a-4ba6-978e-272335211abc',
        name: 'saturn',
        ips: ['134.195.126.108', 'fe80::3f05:3e05:c0cb:a4dc'],
        box: 'box0',
        status: 'OFF',
      },
    ],
  },
  {
    name: 'stevens',
    vms: [
      {
        id: '8075de4a-c78b-47ea-8d9b-7d1c74d4f2ff',
        name: 'testing',
        ips: ['246.111.213.204', 'fe80::1a63:aa15:7a18:e159'],
        box: 'sit',
        status: 'ON'
      },
    ],
  },
];

export async function load(event: { locals: { authenticated: boolean }; cookies: { get: (arg0: string) => string } }): Promise<Data> {
  if (event.locals.authenticated) {
    const userRequest = await fetch('http://10.10.9.4:3000/me', {
      headers: {
        'Authorization': `Bearer ${event.cookies.get('token')}`,
      },
    });

    const user = await userRequest.json();

    if (userRequest.ok) {
      return {
        user,
        boxes
      }
    } else {
      throw new Error(user)
    }
  } else {
    return {
      user: {
        created: '',
        email: '',
        id: '',
        last_login: '',
        name: 'Eric',
        updated: '',
      },
      boxes
    }
  }
}

