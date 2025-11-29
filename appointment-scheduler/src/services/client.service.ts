export class ClientService {
    private clientRepository: ClientRepository;

    constructor(clientRepository: ClientRepository) {
        this.clientRepository = clientRepository;
    }

    async createClient(clientData: any): Promise<any> {
        return await this.clientRepository.save(clientData);
    }

    async getClient(clientId: string): Promise<any> {
        return await this.clientRepository.findById(clientId);
    }

    async updateClient(clientId: string, clientData: any): Promise<any> {
        return await this.clientRepository.update(clientId, clientData);
    }

    async deleteClient(clientId: string): Promise<any> {
        return await this.clientRepository.delete(clientId);
    }

    async getAllClients(): Promise<any[]> {
        return await this.clientRepository.findAll();
    }
}