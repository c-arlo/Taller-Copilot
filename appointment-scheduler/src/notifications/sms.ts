export const sendSmsNotification = (phoneNumber: string, message: string): void => {
    // Logic to send SMS notification
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
};

export const scheduleSmsNotification = (phoneNumber: string, message: string, dateTime: Date): void => {
    // Logic to schedule SMS notification
    console.log(`Scheduled SMS to ${phoneNumber} at ${dateTime}: ${message}`);
};