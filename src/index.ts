import { babyDuckLexer } from './lexer/lexer';
import { babyDuckParser } from './parser/parser';
import { SemanticError } from './semantic/semantic-analyzer';

/**
 * Interfaz para el resultado del análisis
 */
export interface AnalysisResult {
  cst: any;
  lexErrors: any[];
  parseErrors: any[];
  semanticErrors: SemanticError[];
}

/**
 * Analiza el código fuente de BabyDuck
 * @param sourceCode El código fuente a analizar
 * @returns El resultado del análisis con CST y cualquier error
 */
export function parseInput(sourceCode: string): AnalysisResult {
  // Tokenizar la entrada
  const lexResult = babyDuckLexer.tokenize(sourceCode);

  // Verificar errores léxicos
  if (lexResult.errors.length > 0) {
    console.error("Errores léxicos detectados:", lexResult.errors);
    return {
      cst: null,
      lexErrors: lexResult.errors,
      parseErrors: [],
      semanticErrors: []
    };
  }

  // Analizar los tokens
  const parseResult = babyDuckParser.parse(lexResult);

  // Verificar errores de análisis sintáctico
  if (parseResult.parseErrors.length > 0) {
    console.error("Errores de análisis sintáctico detectados:", parseResult.parseErrors);
  }

  return {
    cst: parseResult.cst,
    lexErrors: lexResult.errors,
    parseErrors: parseResult.parseErrors,
    semanticErrors: parseResult.semanticErrors || []
  };
}

// Exportar el lexer y el parser para acceso directo
export { babyDuckLexer, babyDuckParser };