import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AbsoluteDiscountApplicationValueKeySpecifier = ('value' | AbsoluteDiscountApplicationValueKeySpecifier)[];
export type AbsoluteDiscountApplicationValueFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressKeySpecifier = ('address1' | 'address2' | 'city' | 'company' | 'countryCode' | 'email' | 'firstName' | 'formattedAddress' | 'id' | 'lastName' | 'metadata' | 'phone' | 'postalCode' | 'state' | AddressKeySpecifier)[];
export type AddressFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	formattedAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressFieldRequiredErrorKeySpecifier = ('field' | 'message' | AddressFieldRequiredErrorKeySpecifier)[];
export type AddressFieldRequiredErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressInvalidCountryCodeErrorKeySpecifier = ('field' | 'message' | AddressInvalidCountryCodeErrorKeySpecifier)[];
export type AddressInvalidCountryCodeErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressInvalidPhoneNumberErrorKeySpecifier = ('field' | 'message' | AddressInvalidPhoneNumberErrorKeySpecifier)[];
export type AddressInvalidPhoneNumberErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressInvalidPostalCodeErrorKeySpecifier = ('field' | 'message' | AddressInvalidPostalCodeErrorKeySpecifier)[];
export type AddressInvalidPostalCodeErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressInvalidUnableToDetermineTaxErrorKeySpecifier = ('field' | 'message' | AddressInvalidUnableToDetermineTaxErrorKeySpecifier)[];
export type AddressInvalidUnableToDetermineTaxErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressNotFoundErrorKeySpecifier = ('field' | 'message' | AddressNotFoundErrorKeySpecifier)[];
export type AddressNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressesConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | AddressesConnectionKeySpecifier)[];
export type AddressesConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressesEdgeKeySpecifier = ('cursor' | 'node' | AddressesEdgeKeySpecifier)[];
export type AddressesEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateDtoKeySpecifier = ('name' | 'values' | AggregateDtoKeySpecifier)[];
export type AggregateDtoFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateValueDtoKeySpecifier = ('count' | 'name' | AggregateValueDtoKeySpecifier)[];
export type AggregateValueDtoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlreadyConfirmedEmailErrorKeySpecifier = ('field' | 'message' | AlreadyConfirmedEmailErrorKeySpecifier)[];
export type AlreadyConfirmedEmailErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArgumentErrorKeySpecifier = ('field' | 'message' | 'paramName' | ArgumentErrorKeySpecifier)[];
export type ArgumentErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	paramName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeAssignmentKeySpecifier = ('attribute' | 'id' | 'name' | 'values' | AttributeAssignmentKeySpecifier)[];
export type AttributeAssignmentFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeDtoKeySpecifier = ('id' | 'name' | 'type' | AttributeDtoKeySpecifier)[];
export type AttributeDtoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueKeySpecifier = ('id' | 'metadata' | 'value' | AttributeValueKeySpecifier)[];
export type AttributeValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | AttributeValueConnectionKeySpecifier)[];
export type AttributeValueConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AttributeValueEdgeKeySpecifier = ('cursor' | 'node' | AttributeValueEdgeKeySpecifier)[];
export type AttributeValueEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseAddressKeySpecifier = ('address1' | 'address2' | 'city' | 'company' | 'countryCode' | 'email' | 'firstName' | 'id' | 'lastName' | 'metadata' | 'phone' | 'postalCode' | 'state' | BaseAddressKeySpecifier)[];
export type BaseAddressFieldPolicy = {
	address1?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartKeySpecifier = ('billingAddress' | 'channel' | 'channelId' | 'createdAt' | 'currencyCode' | 'id' | 'lastModifiedAt' | 'lineItems' | 'metadata' | 'shippingAddress' | 'shippingMethod' | 'shippingMethods' | 'subtotalPrice' | 'taxedPrice' | 'totalPrice' | 'totalQuantity' | 'vouchers' | CartKeySpecifier)[];
export type CartFieldPolicy = {
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModifiedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethods?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	taxedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	vouchers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddLineItemQuantityExceededErrorKeySpecifier = ('field' | 'message' | CartAddLineItemQuantityExceededErrorKeySpecifier)[];
export type CartAddLineItemQuantityExceededErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartAddLineItemsPayloadKeySpecifier = ('cart' | 'errors' | CartAddLineItemsPayloadKeySpecifier)[];
export type CartAddLineItemsPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartApplyVoucherPayloadKeySpecifier = ('cart' | 'errors' | CartApplyVoucherPayloadKeySpecifier)[];
export type CartApplyVoucherPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartCreatePayloadKeySpecifier = ('cart' | CartCreatePayloadKeySpecifier)[];
export type CartCreatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDeletePayloadKeySpecifier = ('cartDeleteResult' | 'errors' | CartDeletePayloadKeySpecifier)[];
export type CartDeletePayloadFieldPolicy = {
	cartDeleteResult?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartDeleteResultKeySpecifier = ('cartId' | 'success' | CartDeleteResultKeySpecifier)[];
export type CartDeleteResultFieldPolicy = {
	cartId?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartFrozenErrorKeySpecifier = ('field' | 'message' | CartFrozenErrorKeySpecifier)[];
export type CartFrozenErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartInvalidErrorKeySpecifier = ('field' | 'message' | CartInvalidErrorKeySpecifier)[];
export type CartInvalidErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartInvalidQuantityErrorKeySpecifier = ('field' | 'message' | CartInvalidQuantityErrorKeySpecifier)[];
export type CartInvalidQuantityErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartInvalidVoucherErrorKeySpecifier = ('field' | 'message' | CartInvalidVoucherErrorKeySpecifier)[];
export type CartInvalidVoucherErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineItemKeySpecifier = ('discountApplications' | 'id' | 'metadata' | 'originalUnitPrice' | 'product' | 'productName' | 'productSlug' | 'quantity' | 'sku' | 'subtotal' | 'taxRate' | 'taxedPrice' | 'taxedPriceStatus' | 'total' | 'unitPrice' | 'variant' | 'variantName' | CartLineItemKeySpecifier)[];
export type CartLineItemFieldPolicy = {
	discountApplications?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	originalUnitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	productSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxRate?: FieldPolicy<any> | FieldReadFunction<any>,
	taxedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	taxedPriceStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartLineItemNotFoundErrorKeySpecifier = ('field' | 'message' | CartLineItemNotFoundErrorKeySpecifier)[];
export type CartLineItemNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartNotFoundErrorKeySpecifier = ('field' | 'message' | CartNotFoundErrorKeySpecifier)[];
export type CartNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartOrderedErrorKeySpecifier = ('field' | 'message' | CartOrderedErrorKeySpecifier)[];
export type CartOrderedErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartRemoveLineItemsPayloadKeySpecifier = ('cart' | 'errors' | CartRemoveLineItemsPayloadKeySpecifier)[];
export type CartRemoveLineItemsPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartRemoveVoucherPayloadKeySpecifier = ('cart' | 'errors' | CartRemoveVoucherPayloadKeySpecifier)[];
export type CartRemoveVoucherPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartReplicaLineItemKeySpecifier = ('availableInTarget' | 'existsInTarget' | 'quantityAllocatedInTarget' | 'variantId' | CartReplicaLineItemKeySpecifier)[];
export type CartReplicaLineItemFieldPolicy = {
	availableInTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	existsInTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	quantityAllocatedInTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	variantId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartReplicatePayloadKeySpecifier = ('cart' | 'errors' | CartReplicatePayloadKeySpecifier)[];
export type CartReplicatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartReplicationFailedErrorKeySpecifier = ('field' | 'lineItems' | 'message' | CartReplicationFailedErrorKeySpecifier)[];
export type CartReplicationFailedErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartShippingAddressMissingErrorKeySpecifier = ('field' | 'message' | CartShippingAddressMissingErrorKeySpecifier)[];
export type CartShippingAddressMissingErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartShippingMethodKeySpecifier = ('description' | 'id' | 'metadata' | 'name' | 'price' | CartShippingMethodKeySpecifier)[];
export type CartShippingMethodFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartShippingMethodSetPayloadKeySpecifier = ('cart' | 'errors' | CartShippingMethodSetPayloadKeySpecifier)[];
export type CartShippingMethodSetPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUnableToSetShippingMethodErrorKeySpecifier = ('field' | 'message' | CartUnableToSetShippingMethodErrorKeySpecifier)[];
export type CartUnableToSetShippingMethodErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUpdateLineItemsPayloadKeySpecifier = ('cart' | 'errors' | CartUpdateLineItemsPayloadKeySpecifier)[];
export type CartUpdateLineItemsPayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartUpdatePayloadKeySpecifier = ('cart' | 'errors' | CartUpdatePayloadKeySpecifier)[];
export type CartUpdatePayloadFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartVoucherKeySpecifier = ('code' | 'id' | 'name' | CartVoucherKeySpecifier)[];
export type CartVoucherFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartVoucherNotFoundErrorKeySpecifier = ('field' | 'message' | CartVoucherNotFoundErrorKeySpecifier)[];
export type CartVoucherNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChannelKeySpecifier = ('id' | 'name' | 'slug' | ChannelKeySpecifier)[];
export type ChannelFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CheckoutStateDataKeySpecifier = ('currentState' | 'pspReference' | 'referenceId' | CheckoutStateDataKeySpecifier)[];
export type CheckoutStateDataFieldPolicy = {
	currentState?: FieldPolicy<any> | FieldReadFunction<any>,
	pspReference?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('code' | 'language' | 'name' | 'optionalFields' | 'phoneNumberPrefix' | 'requiredFields' | 'stateNameType' | 'zipNameType' | 'zones' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	optionalFields?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumberPrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredFields?: FieldPolicy<any> | FieldReadFunction<any>,
	stateNameType?: FieldPolicy<any> | FieldReadFunction<any>,
	zipNameType?: FieldPolicy<any> | FieldReadFunction<any>,
	zones?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCheckoutPayloadKeySpecifier = ('createCheckoutResult' | 'errors' | CreateCheckoutPayloadKeySpecifier)[];
export type CreateCheckoutPayloadFieldPolicy = {
	createCheckoutResult?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerKeySpecifier = ('addresses' | 'defaultBillingAddress' | 'defaultShippingAddress' | 'email' | 'firstName' | 'group' | 'id' | 'lastName' | 'order' | 'orders' | 'preferences' | CustomerKeySpecifier)[];
export type CustomerFieldPolicy = {
	addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultBillingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultShippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	orders?: FieldPolicy<any> | FieldReadFunction<any>,
	preferences?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccessTokenKeySpecifier = ('accessToken' | 'expiresIn' | 'refreshToken' | 'tokenType' | CustomerAccessTokenKeySpecifier)[];
export type CustomerAccessTokenFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresIn?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	tokenType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAccountDeletePayloadKeySpecifier = ('customer' | CustomerAccountDeletePayloadKeySpecifier)[];
export type CustomerAccountDeletePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerActivatePayloadKeySpecifier = ('customer' | 'customerAccessToken' | 'errors' | CustomerActivatePayloadKeySpecifier)[];
export type CustomerActivatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressCreatePayloadKeySpecifier = ('address' | 'errors' | CustomerAddressCreatePayloadKeySpecifier)[];
export type CustomerAddressCreatePayloadFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressDeletePayloadKeySpecifier = ('errors' | 'typeIdDecoded' | CustomerAddressDeletePayloadKeySpecifier)[];
export type CustomerAddressDeletePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	typeIdDecoded?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressSetDefaultBillingPayloadKeySpecifier = ('address' | 'errors' | CustomerAddressSetDefaultBillingPayloadKeySpecifier)[];
export type CustomerAddressSetDefaultBillingPayloadFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressSetDefaultShippingPayloadKeySpecifier = ('address' | 'errors' | CustomerAddressSetDefaultShippingPayloadKeySpecifier)[];
export type CustomerAddressSetDefaultShippingPayloadFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerAddressUpdatePayloadKeySpecifier = ('address' | 'errors' | CustomerAddressUpdatePayloadKeySpecifier)[];
export type CustomerAddressUpdatePayloadFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreatePayloadKeySpecifier = ('errors' | CustomerCreatePayloadKeySpecifier)[];
export type CustomerCreatePayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerCreateTokenPayloadKeySpecifier = ('customerAccessToken' | 'errors' | CustomerCreateTokenPayloadKeySpecifier)[];
export type CustomerCreateTokenPayloadFieldPolicy = {
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerGroupKeySpecifier = ('description' | 'id' | 'name' | CustomerGroupKeySpecifier)[];
export type CustomerGroupFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerNotFoundErrorKeySpecifier = ('field' | 'message' | CustomerNotFoundErrorKeySpecifier)[];
export type CustomerNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerPreferenceUpdatePayloadKeySpecifier = ('customer' | CustomerPreferenceUpdatePayloadKeySpecifier)[];
export type CustomerPreferenceUpdatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerRefreshTokenPayloadKeySpecifier = ('customerAccessToken' | 'errors' | CustomerRefreshTokenPayloadKeySpecifier)[];
export type CustomerRefreshTokenPayloadFieldPolicy = {
	customerAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerResetPasswordPayloadKeySpecifier = ('customerEmail' | 'errors' | CustomerResetPasswordPayloadKeySpecifier)[];
export type CustomerResetPasswordPayloadFieldPolicy = {
	customerEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerResetPasswordTokenPayloadKeySpecifier = ('customerEmail' | CustomerResetPasswordTokenPayloadKeySpecifier)[];
export type CustomerResetPasswordTokenPayloadFieldPolicy = {
	customerEmail?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomerUpdatePayloadKeySpecifier = ('customer' | 'errors' | CustomerUpdatePayloadKeySpecifier)[];
export type CustomerUpdatePayloadFieldPolicy = {
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountApplicationV1KeySpecifier = ('label' | 'value' | DiscountApplicationV1KeySpecifier)[];
export type DiscountApplicationV1FieldPolicy = {
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscountedPriceKeySpecifier = ('applications' | 'value' | DiscountedPriceKeySpecifier)[];
export type DiscountedPriceFieldPolicy = {
	applications?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FooKeySpecifier = ('backwardCursors' | 'endCursor' | 'forwardCursors' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | FooKeySpecifier)[];
export type FooFieldPolicy = {
	backwardCursors?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	forwardCursors?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InitializeGatewayPayloadKeySpecifier = ('errors' | 'providerGateway' | InitializeGatewayPayloadKeySpecifier)[];
export type InitializeGatewayPayloadFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	providerGateway?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvalidEmailErrorKeySpecifier = ('field' | 'message' | InvalidEmailErrorKeySpecifier)[];
export type InvalidEmailErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvalidEmailOrPasswordErrorKeySpecifier = ('field' | 'message' | InvalidEmailOrPasswordErrorKeySpecifier)[];
export type InvalidEmailOrPasswordErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InvalidTokenErrorKeySpecifier = ('field' | 'message' | InvalidTokenErrorKeySpecifier)[];
export type InvalidTokenErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KeyValuePairOfStringAndStringKeySpecifier = ('key' | 'value' | KeyValuePairOfStringAndStringKeySpecifier)[];
export type KeyValuePairOfStringAndStringFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineItemDiscountApplicationKeySpecifier = ('discountedAmount' | 'id' | 'label' | LineItemDiscountApplicationKeySpecifier)[];
export type LineItemDiscountApplicationFieldPolicy = {
	discountedAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineItemsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | LineItemsConnectionKeySpecifier)[];
export type LineItemsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LineItemsEdgeKeySpecifier = ('cursor' | 'node' | LineItemsEdgeKeySpecifier)[];
export type LineItemsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManualCheckoutKeySpecifier = ('checkoutId' | 'correlationId' | 'transactionId' | ManualCheckoutKeySpecifier)[];
export type ManualCheckoutFieldPolicy = {
	checkoutId?: FieldPolicy<any> | FieldReadFunction<any>,
	correlationId?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManualCheckoutAdditionalDataKeySpecifier = ('data' | ManualCheckoutAdditionalDataKeySpecifier)[];
export type ManualCheckoutAdditionalDataFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ManualStripeCheckoutDataKeySpecifier = ('paymentIntentId' | ManualStripeCheckoutDataKeySpecifier)[];
export type ManualStripeCheckoutDataFieldPolicy = {
	paymentIntentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaKeySpecifier = ('contentType' | 'fileExtension' | 'fileName' | 'id' | 'src' | MediaKeySpecifier)[];
export type MediaFieldPolicy = {
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	fileExtension?: FieldPolicy<any> | FieldReadFunction<any>,
	fileName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | MediaConnectionKeySpecifier)[];
export type MediaConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaEdgeKeySpecifier = ('cursor' | 'node' | MediaEdgeKeySpecifier)[];
export type MediaEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('centAmount' | 'currencyCode' | 'fractionDigits' | 'isZero' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	centAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	fractionDigits?: FieldPolicy<any> | FieldReadFunction<any>,
	isZero?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyV2KeySpecifier = ('centAmount' | 'currencyCode' | 'fractionalDigits' | MoneyV2KeySpecifier)[];
export type MoneyV2FieldPolicy = {
	centAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	currencyCode?: FieldPolicy<any> | FieldReadFunction<any>,
	fractionalDigits?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('cartAddLineItems' | 'cartApplyVoucher' | 'cartCreate' | 'cartDelete' | 'cartRemoveLineItems' | 'cartRemoveVoucher' | 'cartReplicate' | 'cartShippingMethodSet' | 'cartUpdate' | 'cartUpdateLineItems' | 'createCheckout' | 'customerAccountDelete' | 'customerActivate' | 'customerAddressCreate' | 'customerAddressDelete' | 'customerAddressSetDefaultBilling' | 'customerAddressSetDefaultShipping' | 'customerAddressUpdate' | 'customerCreate' | 'customerCreateToken' | 'customerPreferenceUpdate' | 'customerRefreshToken' | 'customerResetPassword' | 'customerResetPasswordToken' | 'customerUpdate' | 'initializeGateway' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	cartAddLineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	cartApplyVoucher?: FieldPolicy<any> | FieldReadFunction<any>,
	cartCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	cartRemoveLineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	cartRemoveVoucher?: FieldPolicy<any> | FieldReadFunction<any>,
	cartReplicate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartShippingMethodSet?: FieldPolicy<any> | FieldReadFunction<any>,
	cartUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	cartUpdateLineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	createCheckout?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAccountDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerActivate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressDelete?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressSetDefaultBilling?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressSetDefaultShipping?: FieldPolicy<any> | FieldReadFunction<any>,
	customerAddressUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCreate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerCreateToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerPreferenceUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	customerRefreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerResetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	customerResetPasswordToken?: FieldPolicy<any> | FieldReadFunction<any>,
	customerUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	initializeGateway?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderKeySpecifier = ('billingAddress' | 'createdAt' | 'externalReferenceId' | 'id' | 'lineItems' | 'number' | 'orderState' | 'paymentState' | 'shipmentState' | 'shippingAddress' | 'shippingMethod' | 'subtotal' | 'taxedPrice' | 'totalPrice' | 'trackingDetails' | OrderKeySpecifier)[];
export type OrderFieldPolicy = {
	billingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalReferenceId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lineItems?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	orderState?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentState?: FieldPolicy<any> | FieldReadFunction<any>,
	shipmentState?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethod?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	taxedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingDetails?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderLineItemKeySpecifier = ('id' | 'metadata' | 'originalUnitPrice' | 'product' | 'productName' | 'productSlug' | 'quantity' | 'sku' | 'subtotal' | 'totalDiscount' | 'totalPrice' | 'unitPrice' | 'variant' | 'variantName' | 'variantV2' | OrderLineItemKeySpecifier)[];
export type OrderLineItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	originalUnitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	productSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	subtotal?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDiscount?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantName?: FieldPolicy<any> | FieldReadFunction<any>,
	variantV2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderShippingMethodKeySpecifier = ('id' | 'metadata' | 'shippingMethodName' | 'sku' | 'unitPrice' | OrderShippingMethodKeySpecifier)[];
export type OrderShippingMethodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	shippingMethodName?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>,
	unitPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrdersConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | OrdersConnectionKeySpecifier)[];
export type OrdersConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrdersEdgeKeySpecifier = ('cursor' | 'node' | OrdersEdgeKeySpecifier)[];
export type OrdersEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageCursorKeySpecifier = ('cursor' | 'page' | PageCursorKeySpecifier)[];
export type PageCursorFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordRequiresDigitErrorKeySpecifier = ('field' | 'message' | PasswordRequiresDigitErrorKeySpecifier)[];
export type PasswordRequiresDigitErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordRequiresLowerErrorKeySpecifier = ('field' | 'message' | PasswordRequiresLowerErrorKeySpecifier)[];
export type PasswordRequiresLowerErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordRequiresNonAlphanumericErrorKeySpecifier = ('field' | 'message' | PasswordRequiresNonAlphanumericErrorKeySpecifier)[];
export type PasswordRequiresNonAlphanumericErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordRequiresUniqueCharsErrorKeySpecifier = ('field' | 'message' | PasswordRequiresUniqueCharsErrorKeySpecifier)[];
export type PasswordRequiresUniqueCharsErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordRequiresUpperErrorKeySpecifier = ('field' | 'message' | PasswordRequiresUpperErrorKeySpecifier)[];
export type PasswordRequiresUpperErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PasswordTooShortErrorKeySpecifier = ('field' | 'message' | PasswordTooShortErrorKeySpecifier)[];
export type PasswordTooShortErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentIntentFailedErrorKeySpecifier = ('field' | 'message' | PaymentIntentFailedErrorKeySpecifier)[];
export type PaymentIntentFailedErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceKeySpecifier = ('discountedPrice' | 'validFrom' | 'validUntil' | 'value' | PriceKeySpecifier)[];
export type PriceFieldPolicy = {
	discountedPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	validFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	validUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceDtoKeySpecifier = ('id' | 'value' | PriceDtoKeySpecifier)[];
export type PriceDtoFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('attributeAssignments' | 'channelId' | 'currency' | 'description' | 'heroVariant' | 'id' | 'metadata' | 'name' | 'priceRange' | 'slug' | 'tags' | 'variants' | 'variantsCount' | 'vendor' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	attributeAssignments?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	heroVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	priceRange?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	variantsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	vendor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPriceRangeKeySpecifier = ('maxPrice' | 'minPrice' | ProductPriceRangeKeySpecifier)[];
export type ProductPriceRangeFieldPolicy = {
	maxPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	minPrice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductsConnectionKeySpecifier = ('aggregates' | 'edges' | 'nodes' | 'pageInfo' | 'totalCount' | ProductsConnectionKeySpecifier)[];
export type ProductsConnectionFieldPolicy = {
	aggregates?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductsEdgeKeySpecifier = ('cursor' | 'node' | ProductsEdgeKeySpecifier)[];
export type ProductsEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProviderCheckoutErrorKeySpecifier = ('field' | 'message' | ProviderCheckoutErrorKeySpecifier)[];
export type ProviderCheckoutErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProviderConfigurationNotFoundErrorKeySpecifier = ('field' | 'message' | ProviderConfigurationNotFoundErrorKeySpecifier)[];
export type ProviderConfigurationNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProviderGatewayNotFoundErrorKeySpecifier = ('field' | 'message' | ProviderGatewayNotFoundErrorKeySpecifier)[];
export type ProviderGatewayNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('cart' | 'checkout' | 'countries' | 'customer' | 'order' | 'product' | 'productV2' | 'products' | 'productsV2' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	cart?: FieldPolicy<any> | FieldReadFunction<any>,
	checkout?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	customer?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	productV2?: FieldPolicy<any> | FieldReadFunction<any>,
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	productsV2?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RelativeDiscountApplicationValueKeySpecifier = ('factor' | RelativeDiscountApplicationValueKeySpecifier)[];
export type RelativeDiscountApplicationValueFieldPolicy = {
	factor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedAttributeKeySpecifier = ('name' | 'value' | SelectedAttributeKeySpecifier)[];
export type SelectedAttributeFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SelectedAttributeDtoKeySpecifier = ('attribute' | 'attributeValue' | 'name' | 'value' | SelectedAttributeDtoKeySpecifier)[];
export type SelectedAttributeDtoFieldPolicy = {
	attribute?: FieldPolicy<any> | FieldReadFunction<any>,
	attributeValue?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StripeCheckoutKeySpecifier = ('clientSecret' | 'pspReference' | StripeCheckoutKeySpecifier)[];
export type StripeCheckoutFieldPolicy = {
	clientSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	pspReference?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StripeGatewayKeySpecifier = ('publishableKey' | StripeGatewayKeySpecifier)[];
export type StripeGatewayFieldPolicy = {
	publishableKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SwatchAttributeValueKeySpecifier = ('color' | 'id' | 'media' | 'metadata' | 'value' | SwatchAttributeValueKeySpecifier)[];
export type SwatchAttributeValueFieldPolicy = {
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxCalculationStatusKeySpecifier = ('calculated' | 'reason' | TaxCalculationStatusKeySpecifier)[];
export type TaxCalculationStatusFieldPolicy = {
	calculated?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxRateKeySpecifier = ('amount' | 'countryCode' | 'id' | 'name' | 'state' | TaxRateKeySpecifier)[];
export type TaxRateFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	countryCode?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxedPriceKeySpecifier = ('notCalculatedReason' | 'totalGross' | 'totalNet' | 'totalTax' | TaxedPriceKeySpecifier)[];
export type TaxedPriceFieldPolicy = {
	notCalculatedReason?: FieldPolicy<any> | FieldReadFunction<any>,
	totalGross?: FieldPolicy<any> | FieldReadFunction<any>,
	totalNet?: FieldPolicy<any> | FieldReadFunction<any>,
	totalTax?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TextAttributeValueKeySpecifier = ('id' | 'metadata' | 'value' | TextAttributeValueKeySpecifier)[];
export type TextAttributeValueFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TrackingDetailsKeySpecifier = ('carrier' | 'trackingNumber' | 'trackingUrl' | TrackingDetailsKeySpecifier)[];
export type TrackingDetailsFieldPolicy = {
	carrier?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	trackingUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypeIdKeySpecifier = ('decode' | 'hasType' | TypeIdKeySpecifier)[];
export type TypeIdFieldPolicy = {
	decode?: FieldPolicy<any> | FieldReadFunction<any>,
	hasType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypeIdDecodedKeySpecifier = ('encode' | 'hasType' | 'id' | 'suffix' | 'timestamp' | 'type' | TypeIdDecodedKeySpecifier)[];
export type TypeIdDecodedFieldPolicy = {
	encode?: FieldPolicy<any> | FieldReadFunction<any>,
	hasType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserErrorKeySpecifier = ('field' | 'message' | UserErrorKeySpecifier)[];
export type UserErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantKeySpecifier = ('availability' | 'barcode' | 'channelId' | 'currency' | 'id' | 'image' | 'media' | 'metadata' | 'name' | 'price' | 'priceV2' | 'product' | 'selectedAttributes' | 'selectedAttributesV2' | 'sku' | VariantKeySpecifier)[];
export type VariantFieldPolicy = {
	availability?: FieldPolicy<any> | FieldReadFunction<any>,
	barcode?: FieldPolicy<any> | FieldReadFunction<any>,
	channelId?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	priceV2?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedAttributes?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedAttributesV2?: FieldPolicy<any> | FieldReadFunction<any>,
	sku?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantAvailabilityKeySpecifier = ('availableForPurchase' | 'inventory' | VariantAvailabilityKeySpecifier)[];
export type VariantAvailabilityFieldPolicy = {
	availableForPurchase?: FieldPolicy<any> | FieldReadFunction<any>,
	inventory?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | 'totalCount' | VariantConnectionKeySpecifier)[];
export type VariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantEdgeKeySpecifier = ('cursor' | 'node' | VariantEdgeKeySpecifier)[];
export type VariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantInventoryKeySpecifier = ('availableQuantity' | 'policy' | VariantInventoryKeySpecifier)[];
export type VariantInventoryFieldPolicy = {
	availableQuantity?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantNotFoundErrorKeySpecifier = ('field' | 'message' | VariantNotFoundErrorKeySpecifier)[];
export type VariantNotFoundErrorFieldPolicy = {
	field?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ZoneKeySpecifier = ('code' | 'name' | ZoneKeySpecifier)[];
export type ZoneFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AbsoluteDiscountApplicationValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AbsoluteDiscountApplicationValueKeySpecifier | (() => undefined | AbsoluteDiscountApplicationValueKeySpecifier),
		fields?: AbsoluteDiscountApplicationValueFieldPolicy,
	},
	Address?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressKeySpecifier | (() => undefined | AddressKeySpecifier),
		fields?: AddressFieldPolicy,
	},
	AddressFieldRequiredError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressFieldRequiredErrorKeySpecifier | (() => undefined | AddressFieldRequiredErrorKeySpecifier),
		fields?: AddressFieldRequiredErrorFieldPolicy,
	},
	AddressInvalidCountryCodeError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressInvalidCountryCodeErrorKeySpecifier | (() => undefined | AddressInvalidCountryCodeErrorKeySpecifier),
		fields?: AddressInvalidCountryCodeErrorFieldPolicy,
	},
	AddressInvalidPhoneNumberError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressInvalidPhoneNumberErrorKeySpecifier | (() => undefined | AddressInvalidPhoneNumberErrorKeySpecifier),
		fields?: AddressInvalidPhoneNumberErrorFieldPolicy,
	},
	AddressInvalidPostalCodeError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressInvalidPostalCodeErrorKeySpecifier | (() => undefined | AddressInvalidPostalCodeErrorKeySpecifier),
		fields?: AddressInvalidPostalCodeErrorFieldPolicy,
	},
	AddressInvalidUnableToDetermineTaxError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressInvalidUnableToDetermineTaxErrorKeySpecifier | (() => undefined | AddressInvalidUnableToDetermineTaxErrorKeySpecifier),
		fields?: AddressInvalidUnableToDetermineTaxErrorFieldPolicy,
	},
	AddressNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressNotFoundErrorKeySpecifier | (() => undefined | AddressNotFoundErrorKeySpecifier),
		fields?: AddressNotFoundErrorFieldPolicy,
	},
	AddressesConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressesConnectionKeySpecifier | (() => undefined | AddressesConnectionKeySpecifier),
		fields?: AddressesConnectionFieldPolicy,
	},
	AddressesEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressesEdgeKeySpecifier | (() => undefined | AddressesEdgeKeySpecifier),
		fields?: AddressesEdgeFieldPolicy,
	},
	AggregateDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateDtoKeySpecifier | (() => undefined | AggregateDtoKeySpecifier),
		fields?: AggregateDtoFieldPolicy,
	},
	AggregateValueDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateValueDtoKeySpecifier | (() => undefined | AggregateValueDtoKeySpecifier),
		fields?: AggregateValueDtoFieldPolicy,
	},
	AlreadyConfirmedEmailError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlreadyConfirmedEmailErrorKeySpecifier | (() => undefined | AlreadyConfirmedEmailErrorKeySpecifier),
		fields?: AlreadyConfirmedEmailErrorFieldPolicy,
	},
	ArgumentError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArgumentErrorKeySpecifier | (() => undefined | ArgumentErrorKeySpecifier),
		fields?: ArgumentErrorFieldPolicy,
	},
	AttributeAssignment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeAssignmentKeySpecifier | (() => undefined | AttributeAssignmentKeySpecifier),
		fields?: AttributeAssignmentFieldPolicy,
	},
	AttributeDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeDtoKeySpecifier | (() => undefined | AttributeDtoKeySpecifier),
		fields?: AttributeDtoFieldPolicy,
	},
	AttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueKeySpecifier | (() => undefined | AttributeValueKeySpecifier),
		fields?: AttributeValueFieldPolicy,
	},
	AttributeValueConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueConnectionKeySpecifier | (() => undefined | AttributeValueConnectionKeySpecifier),
		fields?: AttributeValueConnectionFieldPolicy,
	},
	AttributeValueEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AttributeValueEdgeKeySpecifier | (() => undefined | AttributeValueEdgeKeySpecifier),
		fields?: AttributeValueEdgeFieldPolicy,
	},
	BaseAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseAddressKeySpecifier | (() => undefined | BaseAddressKeySpecifier),
		fields?: BaseAddressFieldPolicy,
	},
	Cart?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartKeySpecifier | (() => undefined | CartKeySpecifier),
		fields?: CartFieldPolicy,
	},
	CartAddLineItemQuantityExceededError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddLineItemQuantityExceededErrorKeySpecifier | (() => undefined | CartAddLineItemQuantityExceededErrorKeySpecifier),
		fields?: CartAddLineItemQuantityExceededErrorFieldPolicy,
	},
	CartAddLineItemsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartAddLineItemsPayloadKeySpecifier | (() => undefined | CartAddLineItemsPayloadKeySpecifier),
		fields?: CartAddLineItemsPayloadFieldPolicy,
	},
	CartApplyVoucherPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartApplyVoucherPayloadKeySpecifier | (() => undefined | CartApplyVoucherPayloadKeySpecifier),
		fields?: CartApplyVoucherPayloadFieldPolicy,
	},
	CartCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartCreatePayloadKeySpecifier | (() => undefined | CartCreatePayloadKeySpecifier),
		fields?: CartCreatePayloadFieldPolicy,
	},
	CartDeletePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDeletePayloadKeySpecifier | (() => undefined | CartDeletePayloadKeySpecifier),
		fields?: CartDeletePayloadFieldPolicy,
	},
	CartDeleteResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartDeleteResultKeySpecifier | (() => undefined | CartDeleteResultKeySpecifier),
		fields?: CartDeleteResultFieldPolicy,
	},
	CartFrozenError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartFrozenErrorKeySpecifier | (() => undefined | CartFrozenErrorKeySpecifier),
		fields?: CartFrozenErrorFieldPolicy,
	},
	CartInvalidError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartInvalidErrorKeySpecifier | (() => undefined | CartInvalidErrorKeySpecifier),
		fields?: CartInvalidErrorFieldPolicy,
	},
	CartInvalidQuantityError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartInvalidQuantityErrorKeySpecifier | (() => undefined | CartInvalidQuantityErrorKeySpecifier),
		fields?: CartInvalidQuantityErrorFieldPolicy,
	},
	CartInvalidVoucherError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartInvalidVoucherErrorKeySpecifier | (() => undefined | CartInvalidVoucherErrorKeySpecifier),
		fields?: CartInvalidVoucherErrorFieldPolicy,
	},
	CartLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineItemKeySpecifier | (() => undefined | CartLineItemKeySpecifier),
		fields?: CartLineItemFieldPolicy,
	},
	CartLineItemNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartLineItemNotFoundErrorKeySpecifier | (() => undefined | CartLineItemNotFoundErrorKeySpecifier),
		fields?: CartLineItemNotFoundErrorFieldPolicy,
	},
	CartNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartNotFoundErrorKeySpecifier | (() => undefined | CartNotFoundErrorKeySpecifier),
		fields?: CartNotFoundErrorFieldPolicy,
	},
	CartOrderedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartOrderedErrorKeySpecifier | (() => undefined | CartOrderedErrorKeySpecifier),
		fields?: CartOrderedErrorFieldPolicy,
	},
	CartRemoveLineItemsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartRemoveLineItemsPayloadKeySpecifier | (() => undefined | CartRemoveLineItemsPayloadKeySpecifier),
		fields?: CartRemoveLineItemsPayloadFieldPolicy,
	},
	CartRemoveVoucherPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartRemoveVoucherPayloadKeySpecifier | (() => undefined | CartRemoveVoucherPayloadKeySpecifier),
		fields?: CartRemoveVoucherPayloadFieldPolicy,
	},
	CartReplicaLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartReplicaLineItemKeySpecifier | (() => undefined | CartReplicaLineItemKeySpecifier),
		fields?: CartReplicaLineItemFieldPolicy,
	},
	CartReplicatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartReplicatePayloadKeySpecifier | (() => undefined | CartReplicatePayloadKeySpecifier),
		fields?: CartReplicatePayloadFieldPolicy,
	},
	CartReplicationFailedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartReplicationFailedErrorKeySpecifier | (() => undefined | CartReplicationFailedErrorKeySpecifier),
		fields?: CartReplicationFailedErrorFieldPolicy,
	},
	CartShippingAddressMissingError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartShippingAddressMissingErrorKeySpecifier | (() => undefined | CartShippingAddressMissingErrorKeySpecifier),
		fields?: CartShippingAddressMissingErrorFieldPolicy,
	},
	CartShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartShippingMethodKeySpecifier | (() => undefined | CartShippingMethodKeySpecifier),
		fields?: CartShippingMethodFieldPolicy,
	},
	CartShippingMethodSetPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartShippingMethodSetPayloadKeySpecifier | (() => undefined | CartShippingMethodSetPayloadKeySpecifier),
		fields?: CartShippingMethodSetPayloadFieldPolicy,
	},
	CartUnableToSetShippingMethodError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUnableToSetShippingMethodErrorKeySpecifier | (() => undefined | CartUnableToSetShippingMethodErrorKeySpecifier),
		fields?: CartUnableToSetShippingMethodErrorFieldPolicy,
	},
	CartUpdateLineItemsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUpdateLineItemsPayloadKeySpecifier | (() => undefined | CartUpdateLineItemsPayloadKeySpecifier),
		fields?: CartUpdateLineItemsPayloadFieldPolicy,
	},
	CartUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartUpdatePayloadKeySpecifier | (() => undefined | CartUpdatePayloadKeySpecifier),
		fields?: CartUpdatePayloadFieldPolicy,
	},
	CartVoucher?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartVoucherKeySpecifier | (() => undefined | CartVoucherKeySpecifier),
		fields?: CartVoucherFieldPolicy,
	},
	CartVoucherNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartVoucherNotFoundErrorKeySpecifier | (() => undefined | CartVoucherNotFoundErrorKeySpecifier),
		fields?: CartVoucherNotFoundErrorFieldPolicy,
	},
	Channel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChannelKeySpecifier | (() => undefined | ChannelKeySpecifier),
		fields?: ChannelFieldPolicy,
	},
	CheckoutStateData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CheckoutStateDataKeySpecifier | (() => undefined | CheckoutStateDataKeySpecifier),
		fields?: CheckoutStateDataFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreateCheckoutPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCheckoutPayloadKeySpecifier | (() => undefined | CreateCheckoutPayloadKeySpecifier),
		fields?: CreateCheckoutPayloadFieldPolicy,
	},
	Customer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerKeySpecifier | (() => undefined | CustomerKeySpecifier),
		fields?: CustomerFieldPolicy,
	},
	CustomerAccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccessTokenKeySpecifier | (() => undefined | CustomerAccessTokenKeySpecifier),
		fields?: CustomerAccessTokenFieldPolicy,
	},
	CustomerAccountDeletePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAccountDeletePayloadKeySpecifier | (() => undefined | CustomerAccountDeletePayloadKeySpecifier),
		fields?: CustomerAccountDeletePayloadFieldPolicy,
	},
	CustomerActivatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerActivatePayloadKeySpecifier | (() => undefined | CustomerActivatePayloadKeySpecifier),
		fields?: CustomerActivatePayloadFieldPolicy,
	},
	CustomerAddressCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressCreatePayloadKeySpecifier | (() => undefined | CustomerAddressCreatePayloadKeySpecifier),
		fields?: CustomerAddressCreatePayloadFieldPolicy,
	},
	CustomerAddressDeletePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressDeletePayloadKeySpecifier | (() => undefined | CustomerAddressDeletePayloadKeySpecifier),
		fields?: CustomerAddressDeletePayloadFieldPolicy,
	},
	CustomerAddressSetDefaultBillingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressSetDefaultBillingPayloadKeySpecifier | (() => undefined | CustomerAddressSetDefaultBillingPayloadKeySpecifier),
		fields?: CustomerAddressSetDefaultBillingPayloadFieldPolicy,
	},
	CustomerAddressSetDefaultShippingPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressSetDefaultShippingPayloadKeySpecifier | (() => undefined | CustomerAddressSetDefaultShippingPayloadKeySpecifier),
		fields?: CustomerAddressSetDefaultShippingPayloadFieldPolicy,
	},
	CustomerAddressUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerAddressUpdatePayloadKeySpecifier | (() => undefined | CustomerAddressUpdatePayloadKeySpecifier),
		fields?: CustomerAddressUpdatePayloadFieldPolicy,
	},
	CustomerCreatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreatePayloadKeySpecifier | (() => undefined | CustomerCreatePayloadKeySpecifier),
		fields?: CustomerCreatePayloadFieldPolicy,
	},
	CustomerCreateTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerCreateTokenPayloadKeySpecifier | (() => undefined | CustomerCreateTokenPayloadKeySpecifier),
		fields?: CustomerCreateTokenPayloadFieldPolicy,
	},
	CustomerGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerGroupKeySpecifier | (() => undefined | CustomerGroupKeySpecifier),
		fields?: CustomerGroupFieldPolicy,
	},
	CustomerNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerNotFoundErrorKeySpecifier | (() => undefined | CustomerNotFoundErrorKeySpecifier),
		fields?: CustomerNotFoundErrorFieldPolicy,
	},
	CustomerPreferenceUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerPreferenceUpdatePayloadKeySpecifier | (() => undefined | CustomerPreferenceUpdatePayloadKeySpecifier),
		fields?: CustomerPreferenceUpdatePayloadFieldPolicy,
	},
	CustomerRefreshTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerRefreshTokenPayloadKeySpecifier | (() => undefined | CustomerRefreshTokenPayloadKeySpecifier),
		fields?: CustomerRefreshTokenPayloadFieldPolicy,
	},
	CustomerResetPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerResetPasswordPayloadKeySpecifier | (() => undefined | CustomerResetPasswordPayloadKeySpecifier),
		fields?: CustomerResetPasswordPayloadFieldPolicy,
	},
	CustomerResetPasswordTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerResetPasswordTokenPayloadKeySpecifier | (() => undefined | CustomerResetPasswordTokenPayloadKeySpecifier),
		fields?: CustomerResetPasswordTokenPayloadFieldPolicy,
	},
	CustomerUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomerUpdatePayloadKeySpecifier | (() => undefined | CustomerUpdatePayloadKeySpecifier),
		fields?: CustomerUpdatePayloadFieldPolicy,
	},
	DiscountApplicationV1?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountApplicationV1KeySpecifier | (() => undefined | DiscountApplicationV1KeySpecifier),
		fields?: DiscountApplicationV1FieldPolicy,
	},
	DiscountedPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscountedPriceKeySpecifier | (() => undefined | DiscountedPriceKeySpecifier),
		fields?: DiscountedPriceFieldPolicy,
	},
	Foo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FooKeySpecifier | (() => undefined | FooKeySpecifier),
		fields?: FooFieldPolicy,
	},
	InitializeGatewayPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InitializeGatewayPayloadKeySpecifier | (() => undefined | InitializeGatewayPayloadKeySpecifier),
		fields?: InitializeGatewayPayloadFieldPolicy,
	},
	InvalidEmailError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvalidEmailErrorKeySpecifier | (() => undefined | InvalidEmailErrorKeySpecifier),
		fields?: InvalidEmailErrorFieldPolicy,
	},
	InvalidEmailOrPasswordError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvalidEmailOrPasswordErrorKeySpecifier | (() => undefined | InvalidEmailOrPasswordErrorKeySpecifier),
		fields?: InvalidEmailOrPasswordErrorFieldPolicy,
	},
	InvalidTokenError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InvalidTokenErrorKeySpecifier | (() => undefined | InvalidTokenErrorKeySpecifier),
		fields?: InvalidTokenErrorFieldPolicy,
	},
	KeyValuePairOfStringAndString?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KeyValuePairOfStringAndStringKeySpecifier | (() => undefined | KeyValuePairOfStringAndStringKeySpecifier),
		fields?: KeyValuePairOfStringAndStringFieldPolicy,
	},
	LineItemDiscountApplication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineItemDiscountApplicationKeySpecifier | (() => undefined | LineItemDiscountApplicationKeySpecifier),
		fields?: LineItemDiscountApplicationFieldPolicy,
	},
	LineItemsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineItemsConnectionKeySpecifier | (() => undefined | LineItemsConnectionKeySpecifier),
		fields?: LineItemsConnectionFieldPolicy,
	},
	LineItemsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LineItemsEdgeKeySpecifier | (() => undefined | LineItemsEdgeKeySpecifier),
		fields?: LineItemsEdgeFieldPolicy,
	},
	ManualCheckout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManualCheckoutKeySpecifier | (() => undefined | ManualCheckoutKeySpecifier),
		fields?: ManualCheckoutFieldPolicy,
	},
	ManualCheckoutAdditionalData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManualCheckoutAdditionalDataKeySpecifier | (() => undefined | ManualCheckoutAdditionalDataKeySpecifier),
		fields?: ManualCheckoutAdditionalDataFieldPolicy,
	},
	ManualStripeCheckoutData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ManualStripeCheckoutDataKeySpecifier | (() => undefined | ManualStripeCheckoutDataKeySpecifier),
		fields?: ManualStripeCheckoutDataFieldPolicy,
	},
	Media?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaKeySpecifier | (() => undefined | MediaKeySpecifier),
		fields?: MediaFieldPolicy,
	},
	MediaConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaConnectionKeySpecifier | (() => undefined | MediaConnectionKeySpecifier),
		fields?: MediaConnectionFieldPolicy,
	},
	MediaEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaEdgeKeySpecifier | (() => undefined | MediaEdgeKeySpecifier),
		fields?: MediaEdgeFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	MoneyV2?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyV2KeySpecifier | (() => undefined | MoneyV2KeySpecifier),
		fields?: MoneyV2FieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	Order?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderKeySpecifier | (() => undefined | OrderKeySpecifier),
		fields?: OrderFieldPolicy,
	},
	OrderLineItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderLineItemKeySpecifier | (() => undefined | OrderLineItemKeySpecifier),
		fields?: OrderLineItemFieldPolicy,
	},
	OrderShippingMethod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderShippingMethodKeySpecifier | (() => undefined | OrderShippingMethodKeySpecifier),
		fields?: OrderShippingMethodFieldPolicy,
	},
	OrdersConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrdersConnectionKeySpecifier | (() => undefined | OrdersConnectionKeySpecifier),
		fields?: OrdersConnectionFieldPolicy,
	},
	OrdersEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrdersEdgeKeySpecifier | (() => undefined | OrdersEdgeKeySpecifier),
		fields?: OrdersEdgeFieldPolicy,
	},
	PageCursor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageCursorKeySpecifier | (() => undefined | PageCursorKeySpecifier),
		fields?: PageCursorFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PasswordRequiresDigitError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordRequiresDigitErrorKeySpecifier | (() => undefined | PasswordRequiresDigitErrorKeySpecifier),
		fields?: PasswordRequiresDigitErrorFieldPolicy,
	},
	PasswordRequiresLowerError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordRequiresLowerErrorKeySpecifier | (() => undefined | PasswordRequiresLowerErrorKeySpecifier),
		fields?: PasswordRequiresLowerErrorFieldPolicy,
	},
	PasswordRequiresNonAlphanumericError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordRequiresNonAlphanumericErrorKeySpecifier | (() => undefined | PasswordRequiresNonAlphanumericErrorKeySpecifier),
		fields?: PasswordRequiresNonAlphanumericErrorFieldPolicy,
	},
	PasswordRequiresUniqueCharsError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordRequiresUniqueCharsErrorKeySpecifier | (() => undefined | PasswordRequiresUniqueCharsErrorKeySpecifier),
		fields?: PasswordRequiresUniqueCharsErrorFieldPolicy,
	},
	PasswordRequiresUpperError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordRequiresUpperErrorKeySpecifier | (() => undefined | PasswordRequiresUpperErrorKeySpecifier),
		fields?: PasswordRequiresUpperErrorFieldPolicy,
	},
	PasswordTooShortError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PasswordTooShortErrorKeySpecifier | (() => undefined | PasswordTooShortErrorKeySpecifier),
		fields?: PasswordTooShortErrorFieldPolicy,
	},
	PaymentIntentFailedError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentIntentFailedErrorKeySpecifier | (() => undefined | PaymentIntentFailedErrorKeySpecifier),
		fields?: PaymentIntentFailedErrorFieldPolicy,
	},
	Price?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceKeySpecifier | (() => undefined | PriceKeySpecifier),
		fields?: PriceFieldPolicy,
	},
	PriceDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceDtoKeySpecifier | (() => undefined | PriceDtoKeySpecifier),
		fields?: PriceDtoFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductPriceRange?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPriceRangeKeySpecifier | (() => undefined | ProductPriceRangeKeySpecifier),
		fields?: ProductPriceRangeFieldPolicy,
	},
	ProductsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductsConnectionKeySpecifier | (() => undefined | ProductsConnectionKeySpecifier),
		fields?: ProductsConnectionFieldPolicy,
	},
	ProductsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductsEdgeKeySpecifier | (() => undefined | ProductsEdgeKeySpecifier),
		fields?: ProductsEdgeFieldPolicy,
	},
	ProviderCheckoutError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProviderCheckoutErrorKeySpecifier | (() => undefined | ProviderCheckoutErrorKeySpecifier),
		fields?: ProviderCheckoutErrorFieldPolicy,
	},
	ProviderConfigurationNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProviderConfigurationNotFoundErrorKeySpecifier | (() => undefined | ProviderConfigurationNotFoundErrorKeySpecifier),
		fields?: ProviderConfigurationNotFoundErrorFieldPolicy,
	},
	ProviderGatewayNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProviderGatewayNotFoundErrorKeySpecifier | (() => undefined | ProviderGatewayNotFoundErrorKeySpecifier),
		fields?: ProviderGatewayNotFoundErrorFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RelativeDiscountApplicationValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RelativeDiscountApplicationValueKeySpecifier | (() => undefined | RelativeDiscountApplicationValueKeySpecifier),
		fields?: RelativeDiscountApplicationValueFieldPolicy,
	},
	SelectedAttribute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedAttributeKeySpecifier | (() => undefined | SelectedAttributeKeySpecifier),
		fields?: SelectedAttributeFieldPolicy,
	},
	SelectedAttributeDto?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SelectedAttributeDtoKeySpecifier | (() => undefined | SelectedAttributeDtoKeySpecifier),
		fields?: SelectedAttributeDtoFieldPolicy,
	},
	StripeCheckout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StripeCheckoutKeySpecifier | (() => undefined | StripeCheckoutKeySpecifier),
		fields?: StripeCheckoutFieldPolicy,
	},
	StripeGateway?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StripeGatewayKeySpecifier | (() => undefined | StripeGatewayKeySpecifier),
		fields?: StripeGatewayFieldPolicy,
	},
	SwatchAttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SwatchAttributeValueKeySpecifier | (() => undefined | SwatchAttributeValueKeySpecifier),
		fields?: SwatchAttributeValueFieldPolicy,
	},
	TaxCalculationStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxCalculationStatusKeySpecifier | (() => undefined | TaxCalculationStatusKeySpecifier),
		fields?: TaxCalculationStatusFieldPolicy,
	},
	TaxRate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxRateKeySpecifier | (() => undefined | TaxRateKeySpecifier),
		fields?: TaxRateFieldPolicy,
	},
	TaxedPrice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxedPriceKeySpecifier | (() => undefined | TaxedPriceKeySpecifier),
		fields?: TaxedPriceFieldPolicy,
	},
	TextAttributeValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TextAttributeValueKeySpecifier | (() => undefined | TextAttributeValueKeySpecifier),
		fields?: TextAttributeValueFieldPolicy,
	},
	TrackingDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TrackingDetailsKeySpecifier | (() => undefined | TrackingDetailsKeySpecifier),
		fields?: TrackingDetailsFieldPolicy,
	},
	TypeId?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TypeIdKeySpecifier | (() => undefined | TypeIdKeySpecifier),
		fields?: TypeIdFieldPolicy,
	},
	TypeIdDecoded?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TypeIdDecodedKeySpecifier | (() => undefined | TypeIdDecodedKeySpecifier),
		fields?: TypeIdDecodedFieldPolicy,
	},
	UserError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserErrorKeySpecifier | (() => undefined | UserErrorKeySpecifier),
		fields?: UserErrorFieldPolicy,
	},
	Variant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantKeySpecifier | (() => undefined | VariantKeySpecifier),
		fields?: VariantFieldPolicy,
	},
	VariantAvailability?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantAvailabilityKeySpecifier | (() => undefined | VariantAvailabilityKeySpecifier),
		fields?: VariantAvailabilityFieldPolicy,
	},
	VariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantConnectionKeySpecifier | (() => undefined | VariantConnectionKeySpecifier),
		fields?: VariantConnectionFieldPolicy,
	},
	VariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantEdgeKeySpecifier | (() => undefined | VariantEdgeKeySpecifier),
		fields?: VariantEdgeFieldPolicy,
	},
	VariantInventory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantInventoryKeySpecifier | (() => undefined | VariantInventoryKeySpecifier),
		fields?: VariantInventoryFieldPolicy,
	},
	VariantNotFoundError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantNotFoundErrorKeySpecifier | (() => undefined | VariantNotFoundErrorKeySpecifier),
		fields?: VariantNotFoundErrorFieldPolicy,
	},
	Zone?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ZoneKeySpecifier | (() => undefined | ZoneKeySpecifier),
		fields?: ZoneFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;