type AppInfo = {
    name: string;
    description: React.ReactNode;
  };
  
  export const appInfo: AppInfo[] = [
    { name: "3M", description: "Active users" },
    {
      name: "60M",
      description: (
        <>
          Links & QR <br /> codes created
        </>
      ),
    },
    { name: "1B", description: <>
      Clicked & Scanned <br /> connections
    </> },
    { name: "300K", description: "App Integrations" },
  ];