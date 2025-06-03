// Se implementa una cola para gestionar turnos en una clínica
// Este ejemplo muestra cómo agregar pacientes a una cola, atenderlos y verificar el estado de la cola.

// Definimos una clase ColaTurnos que representa nuestro sistema de turnos en una clínica
class ColaTurnos {
    constructor(capacidad) {
        this.items = [];
        this.capacidad = capacidad;
    }

    // Encolar: agregar un paciente a la cola
    enqueue(paciente) {
        if (this.isFull()) {
            console.log('La cola está llena. No se pueden agregar más pacientes.');
            return false;
        }
        this.items.push(paciente);
        console.log(`Paciente ${paciente} agregado a la cola.`);
        return true;
    }

    // Desencolar: atender al siguiente paciente
    dequeue() {
        if (this.isEmpty()) {
            console.log('La cola está vacía. No hay pacientes para atender.');
            return null;
        }
        const paciente = this.items.shift();
        console.log(`Paciente ${paciente} atendido.`);
        return paciente;
    }

    // Verificar si la cola está llena
    isFull() {
        return this.items.length >= this.capacidad;
    }

    // Verificar si la cola está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Mostrar el estado actual de la cola
    mostrarCola() {
        console.log('Pacientes en espera:', this.items.join(', '));
    }
}

// Ejemplo de uso
const colaClinica = new ColaTurnos(3);

colaClinica.enqueue('Luis');
colaClinica.enqueue('Fabio');
colaClinica.enqueue('Alejandra');
colaClinica.enqueue('Joan '); // No se puede agregar, cola llena

colaClinica.mostrarCola();

colaClinica.dequeue();
colaClinica.dequeue();

colaClinica.mostrarCola();

colaClinica.enqueue('Joan'); // Ahora sí se puede agregar

colaClinica.mostrarCola();