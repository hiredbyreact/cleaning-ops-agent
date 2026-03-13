// Lightweight workflow orchestrations facade
export const runWorkflow = async (name: string, payload: any) => {
  // In a real system this would dispatch to orchestrations
  return {
    name,
    timestamp: new Date().toISOString(),
    payload
  };
};