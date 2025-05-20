import { format } from "date-fns"

export function formatDate(date: Date): string {
  return format(date, "MMMM d, yyyy")
}

export function formatDateTime(date: Date): string {
  return format(date, "MMMM d, yyyy h:mm a")
}
