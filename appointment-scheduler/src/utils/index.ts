export const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
};

export const parseDate = (dateString: string): Date => {
    return new Date(dateString);
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};