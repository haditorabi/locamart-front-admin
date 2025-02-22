export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};
export type UpdateAmenityInput = {
  id: Scalars["ID"]["input"];
  data: AmenityUpdateInput;
};
export type AmenityUpdateInput = {
  name: Scalars["String"]["input"];
};
export type CreateAmenityInput = {
  data: AmenityCreateInput;
};
export type AmenityCreateInput = {
  name: Scalars["String"]["input"];
};
