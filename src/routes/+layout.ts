export function load() {
  return {
    authenticatedUser: {
      name: 'luke'
    },
    boxes: [
      {
        name: 'box0',
        vms: [
          {
            id: 'fb575668-4056-4833-b605-7acd11947e34',
            name: 'jupiter',
            ip: '134.195.121.106',
            box: 'box0',
            status: 'on'
          },
          {
            id: 'a720cb20-da1a-4ba6-978e-272335211abc',
            ip: '134.195.126.108',
            name: 'saturn',
            box: 'box0',
            status: 'off'
          }
        ]
      },
      {
        name: 'Stevens',
        vms: [
          {
            id: '8075de4a-c78b-47ea-8d9b-7d1c74d4f2ff',
            ip: '10.10.10.10',
            name: 'testing',
            box: 'Stevens',
            status: 'suspended'
          }
        ]
      }
    ]
  };
}
