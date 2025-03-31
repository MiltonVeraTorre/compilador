export class Dictionary<V> {
    private items: { [key: string]: V } = {};
    private keys: string[] = [];
  
    /**
     * Asigna un valor a la clave dada.
     * Si la clave no existe, se agrega.
     * @param key Clave (string).
     * @param value Valor asociado.
     */
    set(key: string, value: V): void {
      if (!this.has(key)) {
        this.keys.push(key);
      }
      this.items[key] = value;
    }
  
    /**
     * Retorna el valor asociado a la clave.
     * @param key Clave a buscar.
     * @returns Valor o undefined si la clave no existe.
     */
    get(key: string): V | undefined {
      return this.has(key) ? this.items[key] : undefined;
    }
  
    /**
     * Verifica si la clave existe en el diccionario.
     * @param key Clave a verificar.
     * @returns true si existe, false de lo contrario.
     */
    has(key: string): boolean {
      return Object.prototype.hasOwnProperty.call(this.items, key);
    }
  
    /**
     * Elimina el par clave-valor asociado a la clave.
     * @param key Clave a eliminar.
     * @returns true si se eliminó, false si no existía.
     */
    remove(key: string): boolean {
      if (this.has(key)) {
        delete this.items[key];
        this.keys = this.keys.filter(k => k !== key);
        return true;
      }
      return false;
    }
  
    /**
     * Elimina todos los pares clave-valor del diccionario.
     */
    clear(): void {
      this.items = {};
      this.keys = [];
    }
  
    /**
     * Retorna la cantidad de elementos en el diccionario.
     * @returns Número de elementos.
     */
    size(): number {
      return this.keys.length;
    }
  
    /**
     * Retorna un arreglo con todas las claves en orden de inserción.
     */
    keysList(): string[] {
      return [...this.keys];
    }
  
    /**
     * Retorna un arreglo con todos los valores en orden de inserción.
     */
    valuesList(): V[] {
      return this.keys.map(key => this.items[key]);
    }
  
    /**
     * Retorna un arreglo de pares [clave, valor] en orden de inserción.
     */
    entries(): [string, V][] {
      return this.keys.map(key => [key, this.items[key]]);
    }
  }
  