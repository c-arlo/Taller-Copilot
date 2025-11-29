export class ClientRepository {
    private clients: Map<number, any> = new Map();
    private currentId: number = 1;

    public createClient(clientData: any): number {
        const clientId = this.currentId++;
        this.clients.set(clientId, { id: clientId, ...clientData });
        return clientId;
    }

    public getClient(clientId: number): any | undefined {
        return this.clients.get(clientId);
    }

    public updateClient(clientId: number, clientData: any): boolean {
        if (this.clients.has(clientId)) {
            this.clients.set(clientId, { id: clientId, ...clientData });
            return true;
        }
        return false;
    }

    public deleteClient(clientId: number): boolean {
        return this.clients.delete(clientId);
    }

    public getAllClients(): any[] {
        return Array.from(this.clients.values());
    }
}