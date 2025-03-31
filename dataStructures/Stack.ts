export class Stack<T> {
    private items: T[] = [];
  
    /**
     * Agrega un elemento al tope de la pila.
     * @param item Elemento a agregar.
     */
    push(item: T): void {
      this.items.push(item);
    }
  
    /**
     * Remueve y retorna el elemento del tope de la pila.
     * @returns Elemento removido o undefined si la pila está vacía.
     */
    pop(): T | undefined {
      return this.items.pop();
    }
  
    /**
     * Retorna el elemento en el tope de la pila sin removerlo.
     * @returns Elemento en el tope o undefined si la pila está vacía.
     */
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    /**
     * Indica si la pila está vacía.
     * @returns true si la pila está vacía, false en caso contrario.
     */
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    /**
     * Retorna el número de elementos en la pila.
     * @returns Cantidad de elementos.
     */
    size(): number {
      return this.items.length;
    }
  
    /**
     * Elimina todos los elementos de la pila.
     */
    clear(): void {
      this.items = [];
    }
  }
  