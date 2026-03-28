class InvisibleEncoder {
    static ZERO = "\u200B";
    static ONE = "\u200C";
    static encode(text) {
        return Array.from(text).map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join('').split('').map(b => b === '0' ? this.ZERO : this.ONE).join('');
    }
    static decode(text) {
        let binary = '';
        for (const char of Array.from(text)) {
            if (char === this.ZERO) binary += '0';
            else if (char === this.ONE) binary += '1';
        }
        let result = '';
        for (let i = 0; i < binary.length; i += 8) {
            const byte = binary.slice(i, i + 8);
            if (byte.length === 8) {
                result += String.fromCharCode(parseInt(byte, 2));
            }
        }
        return result;
    }
}