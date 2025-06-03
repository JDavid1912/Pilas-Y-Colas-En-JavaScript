// Ejemplo de implementración de una pila para un historial de navegación web
// Este ejemplo muestra cómo implementar una pila para un historial de navegación web, permitiendo agregar páginas visitadas y eliminarlas
// de la pila, con un límite de capacidad máxima.


class HistorialNavegacion {
    constructor(capacidadMaxima) {
        this.pila = [];
        this.capacidadMaxima = capacidadMaxima;
    }

    // Método para insertar una nueva página visitada al historial (push)
    push(pagina) {
        if (this.isFull()) {
            console.log(`🚫 El historial está lleno. No se puede agregar la página: ${pagina}.`);
        } else {
            this.pila.push(pagina);
            console.log(`✅ Página '${pagina}' agregada al historial.`);
        }
    }

    // Método para eliminar la última página visitada del historial (pop)
    pop() {
        if (this.isEmpty()) {
            console.log("🚫 El historial está vacío. No hay páginas para eliminar.");
        } else {
            const paginaEliminada = this.pila.pop();
            console.log(`🗑️ Página eliminada del historial: '${paginaEliminada}'.`);
        }
    }

    // Verifica si el historial está lleno
    isFull() {
        return this.pila.length >= this.capacidadMaxima;
    }

    // Verifica si el historial está vacío
    isEmpty() {
        return this.pila.length === 0;
    }

    // Método para mostrar el historial completo de navegación
    mostrarHistorial() {
        if (this.isEmpty()) {
            console.log("📭 El historial está vacío.");
        } else {
            console.log("📖 Historial de navegación:");
            this.pila.forEach((pagina, index) => {
                console.log(`${index + 1}. ${pagina}`);
            });
        }
    }
}

// Ejemplo de uso del historial de navegación
const historial = new HistorialNavegacion(5);

historial.push("www.google.com");
historial.push("www.wikipedia.org");
historial.push("www.youtube.com");
historial.push("www.github.com");
historial.push("www.rincondelvago.com");
historial.push("www.instagram.com"); // No se agrega porque está lleno

historial.mostrarHistorial();

console.log("\n🗑️ Eliminando dos páginas del historial...");
historial.pop();
historial.pop();

historial.mostrarHistorial();

console.log("\n🔄 Agregando una nueva página tras eliminar...");
historial.push("www.medium.com");

historial.mostrarHistorial();

