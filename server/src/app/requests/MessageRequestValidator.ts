export class MessageRequestValidator {
    static notEmpty(field: string): string {
        return `O campo ${field} é obrigatório`;
    }

    static isString(field: string): string {
        return `O campo ${field} deve ser uma string`;
    }

    static isEmail(field: string): string {
        return `O campo ${field} deve ser uma email válido`;
    }

    static isLength(field: string, min: number = 1, max: number = 12): string {
        return `O campo ${field} deve ter no mínimo ${min} caracteres e máximo ${max} caracteres`;
    }
}
