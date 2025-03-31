export class Queue<T> {
    private items: T[] = [];
  
    /**
     * Agrega un elemento al final de la cola.
     * @param item Elemento a agregar.
     */
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    /**
     * Remueve y retorna el primer elemento de la cola.
     * @returns Elemento removido o undefined si la cola está vacía.
     */
    dequeue(): T | undefined {
      return this.items.shift();
    }
  
    /**
     * Retorna el primer elemento de la cola sin removerlo.
     * @returns Primer elemento o undefined si la cola está vacía.
     */
    front(): T | undefined {
      return this.items[0];
    }
  
    /**
     * Indica si la cola está vacía.
     * @returns true si está vacía, false en caso contrario.
     */
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    /**
     * Retorna el número de elementos en la cola.
     * @returns Cantidad de elementos.
     */
    size(): number {
      return this.items.length;
    }
  
    /**
     * Elimina todos los elementos de la cola.
     */
    clear(): void {
      this.items = [];
    }
  }
  