// Se presenta un ejmplo utilizado una cola para gestionar la atención de clientes en un sistema de servicio al cliente.
// Este ejemplo muestra cómo agregar clientes a una cola, atenderlos y verificar el estado de la cola.

// Definimos una clase ColaAtencion que representa nuestro sistema de atención al cliente
class ColaAtencion {
    // El constructor se ejecuta cuando creamos una nueva cola
    constructor(capacidadMaxima) {
        this.cola = []; // Inicializamos un array vacío para la cola
        this.capacidadMaxima = capacidadMaxima; // Establecemos la capacidad máxima de la cola
    }

    // Método para agregar un cliente a la cola
    enqueue(cliente) {
        if (this.isFull()) { // Verificamos si la cola está llena
            console.log(`🚫 La cola está llena. No se puede agregar a ${cliente}.`);
        } else {
            this.cola.push(cliente); // Agregamos el cliente al final de la cola
            console.log(`✅ Cliente ${cliente} ha sido agregado a la cola.`);
        }
    }

    // Método para atender al cliente que está en la parte frontal de la cola
    dequeue() {
        if (this.isEmpty()) { // Verificamos si la cola está vacía
            console.log("🚫 No hay clientes en la cola para atender.");
        } else {
            const clienteAtendido = this.cola.shift(); // Atendemos al primer cliente
            console.log(`👨‍💼 Cliente atendido: ${clienteAtendido}`);
        }
    }

    // Método para verificar si la cola está llena
    isFull() {
        return this.cola.length >= this.capacidadMaxima; // Devuelve true si la cola está llena
    }

    // Método para verificar si la cola está vacía
    isEmpty() {
        return this.cola.length === 0; // Devuelve true si la cola está vacía
    }

    // Método para mostrar el estado actual de la cola
    mostrarCola() {
        if (this.isEmpty()) { // Verificamos si la cola está vacía
            console.log("📭 La cola está vacía.");
        } else {
            console.log("📋 Clientes en espera:", this.cola.join(", ")); // Mostramos los clientes en espera
        }
    }
}

// Ahora, vamos a usar nuestro sistema de atención
const atencionClientes = new ColaAtencion(5); // Creamos una nueva cola con capacidad para 5 clientes

// Agregamos algunos clientes a la cola
atencionClientes.enqueue("Ana");
atencionClientes.enqueue("Luis");
atencionClientes.enqueue("Carlos");
atencionClientes.enqueue("Marta");
atencionClientes.enqueue("Lucía");
atencionClientes.enqueue("Pedro"); // Intentamos agregar a Pedro, pero la cola ya está llena

// Mostramos el estado de la cola
atencionClientes.mostrarCola();

// Atendemos a 2 clientes
console.log("\n⏱️ Atendiendo a 2 clientes...");
atencionClientes.dequeue();
atencionClientes.dequeue();

// Mostramos el estado de la cola nuevamente
atencionClientes.mostrarCola();

// Intentamos agregar a Pedro de nuevo
console.log("\n🔄 Agregando a Pedro de nuevo...");
atencionClientes.enqueue("Pedro");

// Mostramos el estado final de la cola
atencionClientes.mostrarCola();
