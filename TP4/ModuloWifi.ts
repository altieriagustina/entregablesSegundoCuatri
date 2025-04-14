export class ModuloWifi {
    protected velocidadMbps: number;
    private frecuenciaGHz: number; 
    
    public constructor(pVelocidadMbps: number, pFrecuenciaGHz: number){
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    
    // Getters
    
    public getVelocidadMbps(): number {
        return this.velocidadMbps;
    }
    
    public getFrecuenciaGHz(): number {
        return this.frecuenciaGHz;
    }
    
    // Setters
    
    public setVelocidadMbps(pVelocidadMbps: number) {
        this.velocidadMbps = pVelocidadMbps;
    }

    public setFrecuenciaGHz(pFrecuenciaGHz: number) {
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
}