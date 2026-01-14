export class CreateReservationDto {
  startDate: Date; // When the reservation starts
  endDate: Date; // When the reservation ends
  placeId: string;
  invoiceId: string;
}
