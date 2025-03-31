import { Dictionary, Queue, Stack } from "./dataStructures/index.js";
function testStack() {
    console.log("=== Test del Stack ===");
    const stack = new Stack();
    console.log("Agregamos los números: 1, 2, 3");
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log("Elemento en el tope (peek):", stack.peek());
    console.log("Tamaño de la pila:", stack.size());
    console.log("Extraemos el elemento (pop):", stack.pop());
    console.log("Extraemos otro elemento (pop):", stack.pop());
    console.log("¿Pila vacía?", stack.isEmpty());
    console.log("Extraemos el último elemento (pop):", stack.pop());
    console.log("¿Pila vacía?", stack.isEmpty());
    console.log("");
}
function testQueue() {
    console.log("=== Test de Queue ===");
    const queue = new Queue();
    console.log("Encolamos los elementos: 'a', 'b', 'c'");
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    console.log("Primer elemento (front):", queue.front());
    console.log("Tamaño de la cola:", queue.size());
    console.log("Desencolamos un elemento (dequeue):", queue.dequeue());
    console.log("Desencolamos otro elemento (dequeue):", queue.dequeue());
    console.log("¿Cola vacía?", queue.isEmpty());
    console.log("Desencolamos el último elemento (dequeue):", queue.dequeue());
    console.log("¿Cola vacía?", queue.isEmpty());
    console.log("");
}
function testDictionary() {
    console.log("=== Test de Dictionary ===");
    const dict = new Dictionary();
    console.log("Insertamos pares clave-valor: { 'uno': 1, 'dos': 2, 'tres': 3 }");
    dict.set("uno", 1);
    dict.set("dos", 2);
    dict.set("tres", 3);
    console.log("Obtenemos el valor de la clave 'dos':", dict.get("dos"));
    console.log("Listado de claves:", dict.keysList());
    console.log("Listado de valores:", dict.valuesList());
    console.log("Listado de entradas:", dict.entries());
    console.log("Eliminamos la clave 'dos':", dict.remove("dos"));
    console.log("Listado de claves tras la eliminación:", dict.keysList());
    console.log("Tamaño del diccionario:", dict.size());
    console.log("");
}
testStack();
testQueue();
testDictionary();
