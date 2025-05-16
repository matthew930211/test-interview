/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Decimal` scalar type represents a decimal floating-point number. */
  Decimal: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AbsoluteDiscountApplicationValue = {
  __typename?: 'AbsoluteDiscountApplicationValue';
  value: Money;
};

export type AdditionalPaymentData = ManualCheckoutAdditionalData;

export type AdditionalPaymentDataTaggedUnionInput = {
  manualCheckout?: InputMaybe<ManualCheckoutAdditionalDataTaggedUnionInput>;
};

export type Address = BaseAddress & Node & {
  __typename?: 'Address';
  /** The first line of the address. */
  address1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address. */
  address2?: Maybe<Scalars['String']['output']>;
  /** The city of the address. */
  city?: Maybe<Scalars['String']['output']>;
  /** The company of the address. */
  company?: Maybe<Scalars['String']['output']>;
  /** The country code of the address. */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The email address of the address. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the address. */
  firstName?: Maybe<Scalars['String']['output']>;
  formattedAddress?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the address. */
  id: Scalars['ID']['output'];
  /** The last name of the address. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The metadata of the address */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The phone number of the address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postal code of the address. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The state of the address. */
  state?: Maybe<Scalars['String']['output']>;
};

export type AddressFieldRequiredError = UserError & {
  __typename?: 'AddressFieldRequiredError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type AddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type AddressInvalidCountryCodeError = UserError & {
  __typename?: 'AddressInvalidCountryCodeError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type AddressInvalidPhoneNumberError = UserError & {
  __typename?: 'AddressInvalidPhoneNumberError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type AddressInvalidPostalCodeError = UserError & {
  __typename?: 'AddressInvalidPostalCodeError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type AddressInvalidUnableToDetermineTaxError = UserError & {
  __typename?: 'AddressInvalidUnableToDetermineTaxError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type AddressNotFoundError = UserError & {
  __typename?: 'AddressNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AddressesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Address>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Address;
};

export type AggregateDto = {
  __typename?: 'AggregateDto';
  name: Scalars['String']['output'];
  values: Array<AggregateValueDto>;
};

export type AggregateValueDto = {
  __typename?: 'AggregateValueDto';
  count: Scalars['Long']['output'];
  name: Scalars['String']['output'];
};

export type AlreadyConfirmedEmailError = UserError & {
  __typename?: 'AlreadyConfirmedEmailError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

/** Defines when a policy shall be executed. */
export enum ApplyPolicy {
  /** After the resolver was executed. */
  AfterResolver = 'AFTER_RESOLVER',
  /** Before the resolver was executed. */
  BeforeResolver = 'BEFORE_RESOLVER',
  /** The policy is applied in the validation step before the execution. */
  Validation = 'VALIDATION'
}

export type ArgumentError = UserError & {
  __typename?: 'ArgumentError';
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
  paramName?: Maybe<Scalars['String']['output']>;
};

export type AttributeAssignment = {
  __typename?: 'AttributeAssignment';
  /** The attribute assigned to the product. */
  attribute: AttributeDto;
  id: Scalars['ID']['output'];
  /** The name of the attribute */
  name: Scalars['String']['output'];
  /** The values assigned to the product, based on which values the variants have. */
  values: AttributeValueConnection;
};


export type AttributeAssignmentValuesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AttributeDto = {
  __typename?: 'AttributeDto';
  /** The unique identifier of the attribute. */
  id: Scalars['ID']['output'];
  /** The name of the attribute. */
  name: Scalars['String']['output'];
  /** The type of the attribute. */
  type: ProductAttributeType;
};

export type AttributeValue = {
  /** The unique identifier of the attribute value. */
  id: Scalars['ID']['output'];
  metadata: Array<KeyValuePairOfStringAndString>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type AttributeValueConnection = {
  __typename?: 'AttributeValueConnection';
  /** A list of edges. */
  edges?: Maybe<Array<AttributeValueEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<AttributeValue>>;
  /** Information to aid in pagination. */
  pageInfo: Foo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type AttributeValueEdge = {
  __typename?: 'AttributeValueEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AttributeValue;
};

export type BaseAddress = {
  address1?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type Cart = Node & {
  __typename?: 'Cart';
  /** The billing address of the cart. */
  billingAddress: Address;
  channel: Channel;
  /** The unique identifier of the channel the cart belongs to. */
  channelId: TypeIdDecoded;
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The currency code of the cart. */
  currencyCode: Scalars['String']['output'];
  /** The unique identifier of the cart. */
  id: Scalars['ID']['output'];
  /** The date and time when the cart was last modified. */
  lastModifiedAt?: Maybe<Scalars['DateTime']['output']>;
  lineItems?: Maybe<LineItemsConnection>;
  /** The metadata of the cart. */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The shipping address of the cart. */
  shippingAddress: Address;
  shippingMethod?: Maybe<CartShippingMethod>;
  shippingMethods: Array<CartShippingMethod>;
  subtotalPrice: Money;
  taxedPrice?: Maybe<TaxedPrice>;
  totalPrice: Money;
  totalQuantity: Scalars['Int']['output'];
  vouchers: Array<CartVoucher>;
};


export type CartLineItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CartAddLineItemQuantityExceededError = UserError & {
  __typename?: 'CartAddLineItemQuantityExceededError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartAddLineItemsError = CartAddLineItemQuantityExceededError | CartFrozenError | CartInvalidQuantityError | CartNotFoundError | CartOrderedError | VariantNotFoundError;

export type CartAddLineItemsInput = {
  cartId: Scalars['ID']['input'];
  lineItems: Array<CartLineItemInput>;
};

export type CartAddLineItemsPayload = {
  __typename?: 'CartAddLineItemsPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartAddLineItemsError>>;
};

export type CartAddressInput = {
  address: AddressInput;
  /** If false the creation of the address will succeed, even if the system thinks the address is invalid */
  validate?: Scalars['Boolean']['input'];
};

export type CartApplyVoucherError = CartInvalidVoucherError | CartNotFoundError;

export type CartApplyVoucherInput = {
  cartId: Scalars['ID']['input'];
  code: Scalars['String']['input'];
};

export type CartApplyVoucherPayload = {
  __typename?: 'CartApplyVoucherPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartApplyVoucherError>>;
};

/** Creates a new cart. */
export type CartCreateInput = {
  billingAddress?: InputMaybe<CartAddressInput>;
  channelId?: InputMaybe<Scalars['ID']['input']>;
  channelSlug?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  lineItems: Array<CartLineItemInput>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  shippingAddress?: InputMaybe<CartAddressInput>;
};

export type CartCreatePayload = {
  __typename?: 'CartCreatePayload';
  cart?: Maybe<Cart>;
};

export type CartDeleteError = CartFrozenError | CartNotFoundError;

export type CartDeleteInput = {
  cartId: Scalars['ID']['input'];
};

export type CartDeletePayload = {
  __typename?: 'CartDeletePayload';
  cartDeleteResult?: Maybe<CartDeleteResult>;
  errors?: Maybe<Array<CartDeleteError>>;
};

export type CartDeleteResult = {
  __typename?: 'CartDeleteResult';
  cartId: Scalars['ID']['output'];
  success: Scalars['Boolean']['output'];
};

export type CartFrozenError = UserError & {
  __typename?: 'CartFrozenError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartInvalidError = UserError & {
  __typename?: 'CartInvalidError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartInvalidQuantityError = UserError & {
  __typename?: 'CartInvalidQuantityError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartInvalidVoucherError = UserError & {
  __typename?: 'CartInvalidVoucherError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartLineItem = {
  __typename?: 'CartLineItem';
  discountApplications: Array<LineItemDiscountApplication>;
  /** The unique identifier of the cart line item. */
  id: Scalars['ID']['output'];
  /** The metadata of the line item. */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The original price of the cart line item. */
  originalUnitPrice: Money;
  product?: Maybe<Product>;
  /** The name of the line item. */
  productName: Scalars['String']['output'];
  /** The slug of the line item. */
  productSlug: Scalars['String']['output'];
  /** The quantity of the cart line item. */
  quantity: Scalars['Int']['output'];
  /** The SKU of the line item. */
  sku: Scalars['String']['output'];
  subtotal: Money;
  /** The tax rate that applies to the line item. */
  taxRate?: Maybe<TaxRate>;
  taxedPrice?: Maybe<TaxedPrice>;
  taxedPriceStatus?: Maybe<TaxCalculationStatus>;
  total: Money;
  /** The unit price of the cart line item. */
  unitPrice: Money;
  variant?: Maybe<Variant>;
  /** The name of the line item. */
  variantName: Scalars['String']['output'];
};

export type CartLineItemInput = {
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  /** The number of line items of the given variant present in the cart. */
  quantity: Scalars['Int']['input'];
  /** The unique identifier of the product variant. */
  variantId: Scalars['ID']['input'];
};

export type CartLineItemNotFoundError = UserError & {
  __typename?: 'CartLineItemNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartMetadataInput = {
  metadataToAdd?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  metadataToRemove?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CartNotFoundError = UserError & {
  __typename?: 'CartNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartOrderedError = UserError & {
  __typename?: 'CartOrderedError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartRemoveLineItemsError = CartFrozenError | CartLineItemNotFoundError | CartNotFoundError | CartOrderedError;

export type CartRemoveLineItemsInput = {
  cartId: Scalars['ID']['input'];
  lineItemIds: Array<Scalars['ID']['input']>;
};

export type CartRemoveLineItemsPayload = {
  __typename?: 'CartRemoveLineItemsPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartRemoveLineItemsError>>;
};

export type CartRemoveVoucherError = CartNotFoundError | CartVoucherNotFoundError;

export type CartRemoveVoucherInput = {
  cartId: Scalars['ID']['input'];
  voucherCodeId: Scalars['ID']['input'];
};

export type CartRemoveVoucherPayload = {
  __typename?: 'CartRemoveVoucherPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartRemoveVoucherError>>;
};

export type CartReplicaLineItem = {
  __typename?: 'CartReplicaLineItem';
  availableInTarget: Scalars['Boolean']['output'];
  existsInTarget: Scalars['Boolean']['output'];
  quantityAllocatedInTarget?: Maybe<Scalars['Int']['output']>;
  variantId: Scalars['ID']['output'];
};

export type CartReplicateError = CartInvalidError | CartNotFoundError | CartReplicationFailedError;

export type CartReplicateInput = {
  cartId: Scalars['ID']['input'];
  /** The channel to replicate the cart to. */
  channelId: Scalars['ID']['input'];
  currencyCode: Scalars['String']['input'];
  /** The strategy to use when replicating the cart. */
  strategy?: CartReplicateStrategy;
};

export type CartReplicatePayload = {
  __typename?: 'CartReplicatePayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartReplicateError>>;
};

/** Defines the strategy to be applied when replicating the cart. */
export enum CartReplicateStrategy {
  /** Replicates the cart by approximating the requested quantities as closely as possible. For example, if a line item specifies a quantity of 5 but only 4 are available, 4 will be added to the replicated cart. */
  PartialReplication = 'PARTIAL_REPLICATION',
  /** Replicates the cart while excluding any line items that cannot be fully replicated. For example, if a line item specifies a quantity of 5 but only 4 are available, the item will be removed from the replicated cart. */
  SkipUnavailable = 'SKIP_UNAVAILABLE',
  /** Generates an error if the cart cannot be replicated exactly as specified. */
  Strict = 'STRICT'
}

export type CartReplicationFailedError = UserError & {
  __typename?: 'CartReplicationFailedError';
  field: Array<Scalars['String']['output']>;
  lineItems: Array<CartReplicaLineItem>;
  message: Scalars['String']['output'];
};

export type CartShippingAddressMissingError = UserError & {
  __typename?: 'CartShippingAddressMissingError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartShippingMethod = {
  __typename?: 'CartShippingMethod';
  /** The description of the shipping method. */
  description: Scalars['String']['output'];
  /** The unique identifier of the shipping method. */
  id: Scalars['ID']['output'];
  /** The metadata of the shipping method. */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The name of the shipping method. */
  name: Scalars['String']['output'];
  /** The price of the shipping method. */
  price: Money;
};

export type CartShippingMethodSetError = CartNotFoundError | CartShippingAddressMissingError | CartUnableToSetShippingMethodError;

export type CartShippingMethodSetInput = {
  cartId: Scalars['ID']['input'];
  shippingMethodId: Scalars['ID']['input'];
};

export type CartShippingMethodSetPayload = {
  __typename?: 'CartShippingMethodSetPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartShippingMethodSetError>>;
};

export type CartUnableToSetShippingMethodError = UserError & {
  __typename?: 'CartUnableToSetShippingMethodError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CartUpdateError = AddressFieldRequiredError | AddressInvalidCountryCodeError | AddressInvalidPhoneNumberError | AddressInvalidPostalCodeError | AddressInvalidUnableToDetermineTaxError | CartNotFoundError;

export type CartUpdateInput = {
  billingAddress?: InputMaybe<CartAddressInput>;
  billingAddressV2?: InputMaybe<AddressInput>;
  cartId: Scalars['ID']['input'];
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  metadataInput?: InputMaybe<CartMetadataInput>;
  shippingAddress?: InputMaybe<CartAddressInput>;
  shippingAddressV2?: InputMaybe<AddressInput>;
};

export type CartUpdateLineItemsError = CartAddLineItemQuantityExceededError | CartFrozenError | CartInvalidQuantityError | CartLineItemNotFoundError | CartNotFoundError | CartOrderedError | VariantNotFoundError;

export type CartUpdateLineItemsInput = {
  cartId: Scalars['ID']['input'];
  lineItems: Array<UpdateLineItemInput>;
};

export type CartUpdateLineItemsPayload = {
  __typename?: 'CartUpdateLineItemsPayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartUpdateLineItemsError>>;
};

export type CartUpdatePayload = {
  __typename?: 'CartUpdatePayload';
  cart?: Maybe<Cart>;
  errors?: Maybe<Array<CartUpdateError>>;
};

export type CartVoucher = {
  __typename?: 'CartVoucher';
  /** The code of the cart voucher. */
  code: Scalars['String']['output'];
  /** The unique identifier of the cart voucher for the given cart. */
  id: Scalars['ID']['output'];
  /** The name of the cart voucher. */
  name: Scalars['String']['output'];
};

export type CartVoucherNotFoundError = UserError & {
  __typename?: 'CartVoucherNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type Channel = {
  __typename?: 'Channel';
  /** The unique identifier of the channel. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CheckoutStateData = {
  __typename?: 'CheckoutStateData';
  /** The current state of the order. */
  currentState: Scalars['String']['output'];
  pspReference?: Maybe<Scalars['String']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  optionalFields: Array<KeyValuePairOfStringAndString>;
  phoneNumberPrefix?: Maybe<Scalars['String']['output']>;
  requiredFields: Array<KeyValuePairOfStringAndString>;
  stateNameType?: Maybe<Scalars['String']['output']>;
  zipNameType?: Maybe<Scalars['String']['output']>;
  zones: Array<Zone>;
};

export type CreateCheckoutError = ArgumentError | PaymentIntentFailedError | ProviderCheckoutError | ProviderConfigurationNotFoundError | ProviderGatewayNotFoundError;

export type CreateCheckoutInput = {
  additionalData: AdditionalPaymentDataTaggedUnionInput;
  cartId: Scalars['String']['input'];
  configurationName: Scalars['String']['input'];
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  providerName: Scalars['String']['input'];
};

export type CreateCheckoutPayload = {
  __typename?: 'CreateCheckoutPayload';
  createCheckoutResult?: Maybe<CreateCheckoutResult>;
  errors?: Maybe<Array<CreateCheckoutError>>;
};

export type CreateCheckoutResult = ManualCheckout | StripeCheckout;

export type Customer = Node & {
  __typename?: 'Customer';
  /** A list of addresses associated with the customer. */
  addresses?: Maybe<AddressesConnection>;
  /** The default billing address of the customer. */
  defaultBillingAddress?: Maybe<Address>;
  /** The default shipping address of the customer. */
  defaultShippingAddress?: Maybe<Address>;
  /** The email address of the customer. */
  email?: Maybe<Scalars['String']['output']>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']['output']>;
  group?: Maybe<CustomerGroup>;
  /** The unique identifier of the customer. */
  id: Scalars['ID']['output'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Order>;
  orders?: Maybe<OrdersConnection>;
  /** The preferences of the customer. */
  preferences?: Maybe<Array<KeyValuePairOfStringAndString>>;
};


export type CustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type CustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerAccessToken = {
  __typename?: 'CustomerAccessToken';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresIn: Scalars['Long']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  tokenType: Scalars['String']['output'];
};

export type CustomerAccountDeletePayload = {
  __typename?: 'CustomerAccountDeletePayload';
  customer?: Maybe<Customer>;
};

export type CustomerActivateError = AlreadyConfirmedEmailError | CustomerNotFoundError | InvalidEmailError | InvalidEmailOrPasswordError | InvalidTokenError | PasswordRequiresDigitError | PasswordRequiresLowerError | PasswordRequiresNonAlphanumericError | PasswordRequiresUniqueCharsError | PasswordRequiresUpperError | PasswordTooShortError;

export type CustomerActivateInput = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type CustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload';
  customer?: Maybe<Customer>;
  customerAccessToken?: Maybe<CustomerAccessToken>;
  errors?: Maybe<Array<CustomerActivateError>>;
};

export type CustomerAddressCreateError = AddressFieldRequiredError | AddressInvalidPostalCodeError | AddressNotFoundError;

export type CustomerAddressCreateInput = {
  address: CustomerAddressInput;
  /** Force the creation of the address even if the system thinks the address is invalid */
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  address?: Maybe<Address>;
  errors?: Maybe<Array<CustomerAddressCreateError>>;
};

export type CustomerAddressDeleteError = AddressNotFoundError;

export type CustomerAddressDeleteInput = {
  id: Scalars['ID']['input'];
};

export type CustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  errors?: Maybe<Array<CustomerAddressDeleteError>>;
  typeIdDecoded?: Maybe<TypeIdDecoded>;
};

export type CustomerAddressInput = {
  address1?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerAddressSetDefaultBillingError = AddressNotFoundError;

export type CustomerAddressSetDefaultBillingInput = {
  id: Scalars['ID']['input'];
};

export type CustomerAddressSetDefaultBillingPayload = {
  __typename?: 'CustomerAddressSetDefaultBillingPayload';
  address?: Maybe<Address>;
  errors?: Maybe<Array<CustomerAddressSetDefaultBillingError>>;
};

export type CustomerAddressSetDefaultShippingError = AddressNotFoundError;

export type CustomerAddressSetDefaultShippingInput = {
  id: Scalars['ID']['input'];
};

export type CustomerAddressSetDefaultShippingPayload = {
  __typename?: 'CustomerAddressSetDefaultShippingPayload';
  address?: Maybe<Address>;
  errors?: Maybe<Array<CustomerAddressSetDefaultShippingError>>;
};

export type CustomerAddressUpdateError = AddressFieldRequiredError | AddressInvalidPostalCodeError | AddressNotFoundError;

export type CustomerAddressUpdateInput = {
  address: CustomerAddressInput;
  /** Force the update of the address even if the system thinks the address is invalid */
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type CustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  address?: Maybe<Address>;
  errors?: Maybe<Array<CustomerAddressUpdateError>>;
};

export type CustomerCreateError = InvalidEmailError;

export type CustomerCreateInput = {
  email: Scalars['String']['input'];
};

export type CustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload';
  errors?: Maybe<Array<CustomerCreateError>>;
};

export type CustomerCreateTokenError = InvalidEmailOrPasswordError;

export type CustomerCreateTokenInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CustomerCreateTokenPayload = {
  __typename?: 'CustomerCreateTokenPayload';
  customerAccessToken?: Maybe<CustomerAccessToken>;
  errors?: Maybe<Array<CustomerCreateTokenError>>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  /** The description of the customer group. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the customer group. */
  id: Scalars['ID']['output'];
  /** The name of the customer group. */
  name: Scalars['String']['output'];
};

export type CustomerNotFoundError = UserError & {
  __typename?: 'CustomerNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type CustomerPreferenceInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CustomerPreferenceUpdateInput = {
  /** List of keys and values to add to the preferences */
  addPreferences: Array<CustomerPreferenceInput>;
  /** List of keys to remove from the preferences */
  removePreferences: Array<Scalars['String']['input']>;
};

export type CustomerPreferenceUpdatePayload = {
  __typename?: 'CustomerPreferenceUpdatePayload';
  customer?: Maybe<Customer>;
};

export type CustomerRefreshTokenError = InvalidTokenError;

export type CustomerRefreshTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type CustomerRefreshTokenPayload = {
  __typename?: 'CustomerRefreshTokenPayload';
  customerAccessToken?: Maybe<CustomerAccessToken>;
  errors?: Maybe<Array<CustomerRefreshTokenError>>;
};

export type CustomerResetPasswordError = CustomerNotFoundError | InvalidTokenError | PasswordRequiresDigitError | PasswordRequiresLowerError | PasswordRequiresNonAlphanumericError | PasswordRequiresUniqueCharsError | PasswordRequiresUpperError | PasswordTooShortError;

export type CustomerResetPasswordInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type CustomerResetPasswordPayload = {
  __typename?: 'CustomerResetPasswordPayload';
  customerEmail?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<CustomerResetPasswordError>>;
};

export type CustomerResetPasswordTokenInput = {
  email: Scalars['String']['input'];
};

export type CustomerResetPasswordTokenPayload = {
  __typename?: 'CustomerResetPasswordTokenPayload';
  customerEmail: Scalars['String']['output'];
};

export type CustomerUpdateError = CustomerNotFoundError;

export type CustomerUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<Array<CustomerUpdatePreferenceInput>>;
};

export type CustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  customer?: Maybe<Customer>;
  errors?: Maybe<Array<CustomerUpdateError>>;
};

export type CustomerUpdatePreferenceInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type DiscountApplicationV1 = {
  __typename?: 'DiscountApplicationV1';
  label: Scalars['String']['output'];
  value: DiscountApplicationValue;
};

export type DiscountApplicationValue = AbsoluteDiscountApplicationValue | RelativeDiscountApplicationValue;

export type DiscountedPrice = {
  __typename?: 'DiscountedPrice';
  applications: Array<DiscountApplicationV1>;
  value: Money;
};

/** Information about pagination in a connection. */
export type Foo = {
  __typename?: 'Foo';
  /** A list of cursors to continue paginating backwards. */
  backwardCursors: Array<PageCursor>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** A list of cursors to continue paginating forwards. */
  forwardCursors: Array<PageCursor>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type InitializeGatewayError = ProviderConfigurationNotFoundError | ProviderGatewayNotFoundError;

export type InitializeGatewayInput = {
  configurationName: Scalars['String']['input'];
  providerName: Scalars['String']['input'];
};

export type InitializeGatewayPayload = {
  __typename?: 'InitializeGatewayPayload';
  errors?: Maybe<Array<InitializeGatewayError>>;
  providerGateway?: Maybe<ProviderGateway>;
};

export type InvalidEmailError = UserError & {
  __typename?: 'InvalidEmailError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type InvalidEmailOrPasswordError = UserError & {
  __typename?: 'InvalidEmailOrPasswordError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type InvalidTokenError = UserError & {
  __typename?: 'InvalidTokenError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type KeyValuePairOfStringAndString = {
  __typename?: 'KeyValuePairOfStringAndString';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type KeyValuePairOfStringAndStringInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type LineItemDiscountApplication = {
  __typename?: 'LineItemDiscountApplication';
  /** The discounted amount of the line item discount application. */
  discountedAmount: Money;
  /** The unique identifier of the line item discount application. */
  id: Scalars['ID']['output'];
  /** The label of the line item discount application. */
  label: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type LineItemsConnection = {
  __typename?: 'LineItemsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<LineItemsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<CartLineItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LineItemsEdge = {
  __typename?: 'LineItemsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CartLineItem;
};

export type ManualCheckout = {
  __typename?: 'ManualCheckout';
  checkoutId: Scalars['String']['output'];
  correlationId: Scalars['UUID']['output'];
  transactionId: Scalars['UUID']['output'];
};

export type ManualCheckoutAdditionalData = {
  __typename?: 'ManualCheckoutAdditionalData';
  data: ManualCheckoutData;
};

export type ManualCheckoutAdditionalDataTaggedUnionInput = {
  manualStripe?: InputMaybe<ManualStripeCheckoutDataInput>;
};

export type ManualCheckoutData = ManualStripeCheckoutData;

export type ManualStripeCheckoutData = {
  __typename?: 'ManualStripeCheckoutData';
  paymentIntentId: Scalars['String']['output'];
};

export type ManualStripeCheckoutDataInput = {
  paymentIntentId: Scalars['String']['input'];
};

export type Media = {
  __typename?: 'Media';
  /** The content type of the media. */
  contentType: Scalars['String']['output'];
  /** The file extension of the media. */
  fileExtension: Scalars['String']['output'];
  /** The file name of the media. */
  fileName: Scalars['String']['output'];
  /** The unique identifier of the media. */
  id: Scalars['ID']['output'];
  src: Scalars['String']['output'];
};

/** A connection to a list of items. */
export type MediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges?: Maybe<Array<MediaEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Media>>;
  /** Information to aid in pagination. */
  pageInfo: Foo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Media;
};

export type Money = {
  __typename?: 'Money';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['String']['output'];
  fractionDigits: Scalars['Int']['output'];
  isZero: Scalars['Boolean']['output'];
};

/** The monetary value in the smallest unit of the currency. */
export type MoneyV2 = {
  __typename?: 'MoneyV2';
  centAmount: Scalars['Long']['output'];
  currencyCode: Scalars['String']['output'];
  fractionalDigits: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  cartAddLineItems: CartAddLineItemsPayload;
  cartApplyVoucher: CartApplyVoucherPayload;
  cartCreate: CartCreatePayload;
  cartDelete: CartDeletePayload;
  cartRemoveLineItems: CartRemoveLineItemsPayload;
  cartRemoveVoucher: CartRemoveVoucherPayload;
  cartReplicate: CartReplicatePayload;
  cartShippingMethodSet: CartShippingMethodSetPayload;
  cartUpdate: CartUpdatePayload;
  cartUpdateLineItems: CartUpdateLineItemsPayload;
  createCheckout: CreateCheckoutPayload;
  customerAccountDelete: CustomerAccountDeletePayload;
  customerActivate: CustomerActivatePayload;
  customerAddressCreate: CustomerAddressCreatePayload;
  customerAddressDelete: CustomerAddressDeletePayload;
  customerAddressSetDefaultBilling: CustomerAddressSetDefaultBillingPayload;
  customerAddressSetDefaultShipping: CustomerAddressSetDefaultShippingPayload;
  customerAddressUpdate: CustomerAddressUpdatePayload;
  customerCreate: CustomerCreatePayload;
  customerCreateToken: CustomerCreateTokenPayload;
  customerPreferenceUpdate: CustomerPreferenceUpdatePayload;
  customerRefreshToken: CustomerRefreshTokenPayload;
  customerResetPassword: CustomerResetPasswordPayload;
  customerResetPasswordToken: CustomerResetPasswordTokenPayload;
  customerUpdate: CustomerUpdatePayload;
  initializeGateway: InitializeGatewayPayload;
};


export type MutationCartAddLineItemsArgs = {
  input: CartAddLineItemsInput;
};


export type MutationCartApplyVoucherArgs = {
  input: CartApplyVoucherInput;
};


export type MutationCartCreateArgs = {
  input: CartCreateInput;
};


export type MutationCartDeleteArgs = {
  input: CartDeleteInput;
};


export type MutationCartRemoveLineItemsArgs = {
  input: CartRemoveLineItemsInput;
};


export type MutationCartRemoveVoucherArgs = {
  input: CartRemoveVoucherInput;
};


export type MutationCartReplicateArgs = {
  input: CartReplicateInput;
};


export type MutationCartShippingMethodSetArgs = {
  input: CartShippingMethodSetInput;
};


export type MutationCartUpdateArgs = {
  input: CartUpdateInput;
};


export type MutationCartUpdateLineItemsArgs = {
  input: CartUpdateLineItemsInput;
};


export type MutationCreateCheckoutArgs = {
  input: CreateCheckoutInput;
};


export type MutationCustomerActivateArgs = {
  input: CustomerActivateInput;
};


export type MutationCustomerAddressCreateArgs = {
  input: CustomerAddressCreateInput;
};


export type MutationCustomerAddressDeleteArgs = {
  input: CustomerAddressDeleteInput;
};


export type MutationCustomerAddressSetDefaultBillingArgs = {
  input: CustomerAddressSetDefaultBillingInput;
};


export type MutationCustomerAddressSetDefaultShippingArgs = {
  input: CustomerAddressSetDefaultShippingInput;
};


export type MutationCustomerAddressUpdateArgs = {
  input: CustomerAddressUpdateInput;
};


export type MutationCustomerCreateArgs = {
  input: CustomerCreateInput;
};


export type MutationCustomerCreateTokenArgs = {
  input: CustomerCreateTokenInput;
};


export type MutationCustomerPreferenceUpdateArgs = {
  input: CustomerPreferenceUpdateInput;
};


export type MutationCustomerRefreshTokenArgs = {
  input: CustomerRefreshTokenInput;
};


export type MutationCustomerResetPasswordArgs = {
  input: CustomerResetPasswordInput;
};


export type MutationCustomerResetPasswordTokenArgs = {
  input: CustomerResetPasswordTokenInput;
};


export type MutationCustomerUpdateArgs = {
  input: CustomerUpdateInput;
};


export type MutationInitializeGatewayArgs = {
  input: InitializeGatewayInput;
};

/** The node interface is implemented by entities that have a global unique identifier. */
export type Node = {
  id: Scalars['ID']['output'];
};

export enum NotCalculatedTaxedPriceReason {
  NotCalculatedYet = 'NOT_CALCULATED_YET',
  NoTaxRateFound = 'NO_TAX_RATE_FOUND',
  ShippingCountryNotSet = 'SHIPPING_COUNTRY_NOT_SET'
}

export type Order = {
  __typename?: 'Order';
  billingAddress: Address;
  /** The date and time the order was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The external reference id of the order. */
  externalReferenceId?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the order. */
  id: Scalars['ID']['output'];
  lineItems?: Maybe<Array<OrderLineItem>>;
  /** The order number. */
  number: Scalars['Int']['output'];
  /** The current state of the order. */
  orderState: OrderState;
  /** The current state of the payment. */
  paymentState: PaymentState;
  /** The current state of the shipment. */
  shipmentState: ShipmentState;
  shippingAddress: Address;
  shippingMethod?: Maybe<OrderShippingMethod>;
  subtotal: Money;
  taxedPrice: TaxedPrice;
  totalPrice: Money;
  trackingDetails: Array<TrackingDetails>;
};

export type OrderLineItem = Node & {
  __typename?: 'OrderLineItem';
  /** The unique identifier of the line item. */
  id: Scalars['ID']['output'];
  /** The metadata of the line item. */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The original price of a single unit of the line item. */
  originalUnitPrice: Money;
  product?: Maybe<Product>;
  /** The name of the line item. */
  productName: Scalars['String']['output'];
  /** The slug of the line item. */
  productSlug: Scalars['String']['output'];
  /** The number of line items of the given variant present in the order. */
  quantity: Scalars['Int']['output'];
  /** The SKU of the line item. */
  sku: Scalars['String']['output'];
  /** The subtotal of the line item. */
  subtotal: Money;
  /** The total discount applied to the line item. */
  totalDiscount: Money;
  /** The taxed price of the line item. */
  totalPrice: Money;
  /** The price of a single unit of the line item. */
  unitPrice: Money;
  variant?: Maybe<Variant>;
  /** The name of the line item. */
  variantName: Scalars['String']['output'];
  variantV2?: Maybe<Variant>;
};

export type OrderShippingMethod = {
  __typename?: 'OrderShippingMethod';
  id: Scalars['ID']['output'];
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  shippingMethodName: Scalars['String']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  unitPrice: Money;
};

export enum OrderState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Open = 'OPEN'
}

/** A connection to a list of items. */
export type OrdersConnection = {
  __typename?: 'OrdersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<OrdersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Order>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrdersEdge = {
  __typename?: 'OrdersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
};

/** A cursor that points to a specific page. */
export type PageCursor = {
  __typename?: 'PageCursor';
  /** The cursor. */
  cursor: Scalars['String']['output'];
  /** The page number. */
  page: Scalars['Int']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PasswordRequiresDigitError = UserError & {
  __typename?: 'PasswordRequiresDigitError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PasswordRequiresLowerError = UserError & {
  __typename?: 'PasswordRequiresLowerError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PasswordRequiresNonAlphanumericError = UserError & {
  __typename?: 'PasswordRequiresNonAlphanumericError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PasswordRequiresUniqueCharsError = UserError & {
  __typename?: 'PasswordRequiresUniqueCharsError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PasswordRequiresUpperError = UserError & {
  __typename?: 'PasswordRequiresUpperError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PasswordTooShortError = UserError & {
  __typename?: 'PasswordTooShortError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type PaymentIntentFailedError = UserError & {
  __typename?: 'PaymentIntentFailedError';
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export enum PaymentState {
  Authorized = 'AUTHORIZED',
  BalanceDue = 'BALANCE_DUE',
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Paid = 'PAID',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Refunded = 'REFUNDED'
}

export type Price = {
  __typename?: 'Price';
  discountedPrice?: Maybe<DiscountedPrice>;
  /** The date and time from which the price is valid. */
  validFrom?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time to which the price is valid. */
  validUntil?: Maybe<Scalars['DateTime']['output']>;
  /** The value of the original price. This does not contains discounts. */
  value: Money;
};

export type PriceDto = {
  __typename?: 'PriceDto';
  id: Scalars['ID']['output'];
  value: MoneyV2;
};

export type Product = {
  __typename?: 'Product';
  /** A list of attributes associated with the product. */
  attributeAssignments: Array<AttributeAssignment>;
  channelId: Scalars['ID']['output'];
  currency: Scalars['String']['output'];
  /** The description of the product. */
  description?: Maybe<Scalars['String']['output']>;
  /** Gets the hero variant for the product, the hero variant is the first variant of the product, or the specific variant chosen for the channel */
  heroVariant?: Maybe<Variant>;
  /** The unique identifier of the product. */
  id: Scalars['ID']['output'];
  /** The metadata of the product. */
  metadata: Array<KeyValuePairOfStringAndString>;
  /** The name of the product. */
  name: Scalars['String']['output'];
  priceRange: ProductPriceRange;
  /** The slug of the product. */
  slug: Scalars['String']['output'];
  /** The tags of the product. */
  tags: Array<Scalars['String']['output']>;
  /** The variants of the product. */
  variants: VariantConnection;
  /** The number of variants that are associated with the product and published in the current channel. */
  variantsCount: Scalars['Long']['output'];
  /** The vendor of the product. */
  vendor?: Maybe<Scalars['String']['output']>;
};


export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductAttributeType {
  Swatch = 'SWATCH',
  Text = 'TEXT'
}

export type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  maxPrice: Money;
  minPrice: Money;
};

export enum ProductSortKeys {
  Id = 'ID',
  Name = 'NAME',
  Price = 'PRICE'
}

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  aggregates: Array<AggregateDto>;
  /** A list of edges. */
  edges?: Maybe<Array<ProductsEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Product>>;
  /** Information to aid in pagination. */
  pageInfo: Foo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type ProductsEdge = {
  __typename?: 'ProductsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProviderCheckoutError = UserError & {
  __typename?: 'ProviderCheckoutError';
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export type ProviderConfigurationNotFoundError = UserError & {
  __typename?: 'ProviderConfigurationNotFoundError';
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export type ProviderGateway = StripeGateway;

export type ProviderGatewayNotFoundError = UserError & {
  __typename?: 'ProviderGatewayNotFoundError';
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cart?: Maybe<Cart>;
  checkout?: Maybe<CheckoutStateData>;
  countries: Array<Country>;
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  /** The currency code of which prices you want to load. */
  product?: Maybe<Product>;
  /** The currency code of which prices you want to load. */
  productV2?: Maybe<Product>;
  /** The currency code of which prices you want to load. */
  products: ProductsConnection;
  /** The currency code of which prices you want to load. */
  productsV2: ProductsConnection;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCheckoutArgs = {
  referenceId: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  referenceId: Scalars['String']['input'];
};


export type QueryProductArgs = {
  channel: Scalars['String']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductV2Args = {
  channel: Scalars['String']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ProductSortKeys;
};


export type QueryProductsV2Args = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  channel: Scalars['String']['input'];
  currency?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: SortDirection;
  sortKey?: ProductSortKeys;
};

export type RelativeDiscountApplicationValue = {
  __typename?: 'RelativeDiscountApplicationValue';
  factor: Scalars['Decimal']['output'];
};

export type SelectedAttribute = {
  __typename?: 'SelectedAttribute';
  /** The product attribute’s name. */
  name: Scalars['String']['output'];
  /** The product attribute value’s value. */
  value: Scalars['String']['output'];
};

export type SelectedAttributeDto = {
  __typename?: 'SelectedAttributeDto';
  attribute: AttributeDto;
  attributeValue: AttributeValue;
  /** The selected attribute name */
  name: Scalars['String']['output'];
  /** The selected attribute value */
  value: Scalars['String']['output'];
};

export enum ShipmentState {
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Ready = 'READY',
  Shipped = 'SHIPPED'
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum StockPolicy {
  NotTracked = 'NOT_TRACKED',
  Tracked = 'TRACKED'
}

export type StripeCheckout = {
  __typename?: 'StripeCheckout';
  clientSecret: Scalars['String']['output'];
  pspReference: Scalars['String']['output'];
};

export type StripeGateway = {
  __typename?: 'StripeGateway';
  publishableKey: Scalars['String']['output'];
};

export type SwatchAttributeValue = AttributeValue & {
  __typename?: 'SwatchAttributeValue';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  metadata: Array<KeyValuePairOfStringAndString>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
};

export type TaxCalculationStatus = {
  __typename?: 'TaxCalculationStatus';
  calculated: Scalars['Boolean']['output'];
  reason?: Maybe<NotCalculatedTaxedPriceReason>;
};

export type TaxRate = {
  __typename?: 'TaxRate';
  /** Tax rate. */
  amount: Scalars['Decimal']['output'];
  /** Country in which the tax rate is applicable. */
  countryCode: Scalars['String']['output'];
  /** The unique identifier of the Tax Rate. */
  id: Scalars['ID']['output'];
  /** The name of the Tax Rate. */
  name: Scalars['String']['output'];
  /** State in which the tax rate is applicable. */
  state?: Maybe<Scalars['String']['output']>;
};

export type TaxedPrice = {
  __typename?: 'TaxedPrice';
  notCalculatedReason?: Maybe<NotCalculatedTaxedPriceReason>;
  totalGross: Money;
  totalNet: Money;
  totalTax: Money;
};

export type TextAttributeValue = AttributeValue & {
  __typename?: 'TextAttributeValue';
  id: Scalars['ID']['output'];
  metadata: Array<KeyValuePairOfStringAndString>;
  /** The value of the attribute. */
  value: Scalars['String']['output'];
};

export type TrackingDetails = {
  __typename?: 'TrackingDetails';
  carrier: Scalars['String']['output'];
  trackingNumber: Scalars['String']['output'];
  trackingUrl: Scalars['String']['output'];
};

export type TypeId = {
  __typename?: 'TypeId';
  decode: TypeIdDecoded;
  hasType: Scalars['Boolean']['output'];
};


export type TypeIdHasTypeArgs = {
  type: Scalars['String']['input'];
};

export type TypeIdDecoded = {
  __typename?: 'TypeIdDecoded';
  encode: TypeId;
  hasType: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  suffix: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
};


export type TypeIdDecodedHasTypeArgs = {
  type: Scalars['String']['input'];
};

export type UpdateLineItemInput = {
  lineItemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type UserError = {
  field?: Maybe<Array<Scalars['String']['output']>>;
  message: Scalars['String']['output'];
};

export type Variant = {
  __typename?: 'Variant';
  availability: VariantAvailability;
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']['output']>;
  channelId: Scalars['ID']['output'];
  currency: Scalars['String']['output'];
  /** The unique identifier of the variant. */
  id: Scalars['ID']['output'];
  /** Gets the featured image for the variant, the featured image is the first media of type image */
  image?: Maybe<Media>;
  media: MediaConnection;
  /** The metadata associated with the variant. */
  metadata?: Maybe<Array<KeyValuePairOfStringAndString>>;
  /** The name of the variant. */
  name: Scalars['String']['output'];
  price?: Maybe<Price>;
  priceV2?: Maybe<PriceDto>;
  product: Product;
  selectedAttributes: Array<SelectedAttributeDto>;
  selectedAttributesV2: Array<SelectedAttributeDto>;
  /** The stock keeping unit of the variant. */
  sku?: Maybe<Scalars['String']['output']>;
};


export type VariantMediaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type VariantAvailability = {
  __typename?: 'VariantAvailability';
  /** Indicates whether the variant is available for sale in the current channel. Be aware that if the product is disabled for purchase, the variant will also be disabled. */
  availableForPurchase: Scalars['Boolean']['output'];
  inventory?: Maybe<VariantInventory>;
};

/** A connection to a list of items. */
export type VariantConnection = {
  __typename?: 'VariantConnection';
  /** A list of edges. */
  edges?: Maybe<Array<VariantEdge>>;
  /** A flattened list of the nodes */
  nodes?: Maybe<Array<Variant>>;
  /** Information to aid in pagination. */
  pageInfo: Foo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

export type VariantEdge = {
  __typename?: 'VariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Variant;
};

export type VariantInventory = {
  __typename?: 'VariantInventory';
  availableQuantity: Scalars['Int']['output'];
  policy: StockPolicy;
};

export type VariantNotFoundError = UserError & {
  __typename?: 'VariantNotFoundError';
  field: Array<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type Zone = {
  __typename?: 'Zone';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ProductsPickerQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsPickerQuery = { __typename?: 'Query', products: { __typename?: 'ProductsConnection', edges?: Array<{ __typename?: 'ProductsEdge', node: { __typename?: 'Product', id: string, name: string } }> | null, pageInfo: { __typename?: 'Foo', hasNextPage: boolean, endCursor?: string | null } } };


export const ProductsPickerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductsPicker"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"channel"},"value":{"kind":"StringValue","value":"europe","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]} as unknown as DocumentNode<ProductsPickerQuery, ProductsPickerQueryVariables>;