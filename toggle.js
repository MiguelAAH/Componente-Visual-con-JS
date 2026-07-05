class ToggleVisual {
    constructor(selectorContenedor, configuracion = {}) {
        this.contenedor = document.querySelector(selectorContenedor);
        this.colorOscuro = configuracion.colorOscuro || '#212121';
        this.textoLabel = configuracion.texto || '';

        if (this.contenedor) {
            this.inicializar();
        }
    }

    inicializar() {
        const estiloBody = window.getComputedStyle(document.body);
        this.colorOriginal = estiloBody.backgroundColor;

        this.contenedor.innerHTML = `
            <span class="toggle-label">${this.textoLabel}</span>
            <div class="switch-bg">
                <div class="circle-toggle"></div>
            </div>
        `;

        this.switchBg = this.contenedor.querySelector('.switch-bg');

        this.switchBg.addEventListener('click', () => {
            this.switchBg.classList.toggle('active');
            const esActivo = this.switchBg.classList.contains('active');
            document.body.style.backgroundColor = esActivo ? this.colorOscuro : this.colorOriginal;

            if (esActivo) {
                document.body.classList.add('body-dark');
            } else {
                document.body.classList.remove('body-dark');
            }
        });
    }
}