import { Country, DeliveryServiceDefinition, DocumentFormat, DocumentSize, FulfillmentService, ServiceArea, ManifestType } from "@shipengine/connect";
import { adultSignature, recipientSignature, signature } from "../delivery-confirmations";
import { customerPackaging } from "../packaging/customer";
import { fedExFlatRatePackaging } from "../packaging/fedex-flat-rate";

export const internationalPriority: DeliveryServiceDefinition = {
  id: "f4bf9040-a84c-4761-a2f4-fb1a2b42e905",
  code: "INTPRI",
  name: "International Priority",
  description:
    "Delivery typically in 1 to 3 business days, next business day to the U.S., Canada, Mexico and the Caribbean. " +
    "Reach major cities in Europe by 10:30 am typically in two business days.",
  serviceArea: ServiceArea.International,
  manifestType: ManifestType.Digital,
  fulfillmentService: FulfillmentService.FedExInternationalPriority,
  allowsMultiplePackages: true,
  isTrackable: true,
  isInsurable: true,
  labelFormats: [
    DocumentFormat.PDF,
    DocumentFormat.PNG,
  ],
  labelSizes: [
    DocumentSize.A4,
    DocumentSize.Letter,
    DocumentSize.Inches4x6,
  ],
  availableCountries: [
    Country.UnitedStates,
  ],
  packaging: [
    ...customerPackaging,
    ...fedExFlatRatePackaging,
  ],
  deliveryConfirmations: [
    signature, adultSignature, recipientSignature,
  ],
};

export default internationalPriority;
