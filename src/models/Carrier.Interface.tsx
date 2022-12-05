export interface Carrier {
  name: string;
  gsdb: string;
  carrierManager: string;
}

const initialForm: Carrier = {
  name: "",
  gsdb: "",
  carrierManager: "",
};

const getInitialCarrier = () => initialForm;

export { getInitialCarrier };
