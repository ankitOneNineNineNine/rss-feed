export class AppError extends Error {
  status: number;
  details: string;
  constructor({ message, details, status }: { message: string; details: string; status: number }) {
    super(message);
    this.details = details;
    this.status = status;
  }
}
