// src/lib/functions.ts

/**
 * Genera un hash corto, determinista, estilo “prefijo de commit”.
 * - uniqueKey: cadena ÚNICA por commit (p. ej. "2025-04-01|tcg-events-manager").
 * - len: longitud del prefijo devuelto (por defecto 7, similar a Git).
 */
export function commitHash(uniqueKey: string, len: number = 7): string {
  // Valor inicial del algoritmo FNV-1a de 32 bits (offset basis).
  // Es una constante recomendada para iniciar el hash.
  let h = 0x811c9dc5;

  // Recorremos cada carácter de la clave única…
  for (let i = 0; i < uniqueKey.length; i++) {
    // Mezclamos el hash con el código del carácter mediante XOR.
    h ^= uniqueKey.charCodeAt(i);
    // Multiplicamos por el primo FNV (0x01000193 = 16777619) usando Math.imul
    // para forzar multiplicación de 32 bits (evita pérdidas por números grandes).
    h = Math.imul(h, 0x01000193);
  }

  // >>> 0 fuerza el número a unsigned 32-bit (convierte posibles negativos a su representación sin signo).
  // toString(16) lo pasa a hexadecimal. padStart(8, '0') asegura 8 dígitos (como un hash de 32 bits).
  const hex = (h >>> 0).toString(16).padStart(8, '0');

  // Limitamos la longitud solicitada: al menos 1 y como mucho 12 (suele sobrar para IDs visibles).
  const n = Math.max(1, Math.min(12, len));

  // Devolvemos el prefijo del hash con la longitud pedida.
  return hex.slice(0, n);
}
