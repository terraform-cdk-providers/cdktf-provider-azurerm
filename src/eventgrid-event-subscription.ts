// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#event_delivery_schema EventgridEventSubscription#event_delivery_schema}
  */
  readonly eventDeliverySchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_endpoint_id EventgridEventSubscription#eventhub_endpoint_id}
  */
  readonly eventhubEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#expiration_time_utc EventgridEventSubscription#expiration_time_utc}
  */
  readonly expirationTimeUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_endpoint_id EventgridEventSubscription#hybrid_connection_endpoint_id}
  */
  readonly hybridConnectionEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#included_event_types EventgridEventSubscription#included_event_types}
  */
  readonly includedEventTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#labels EventgridEventSubscription#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#name EventgridEventSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#scope EventgridEventSubscription#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#service_bus_queue_endpoint_id EventgridEventSubscription#service_bus_queue_endpoint_id}
  */
  readonly serviceBusQueueEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#service_bus_topic_endpoint_id EventgridEventSubscription#service_bus_topic_endpoint_id}
  */
  readonly serviceBusTopicEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#topic_name EventgridEventSubscription#topic_name}
  */
  readonly topicName?: string;
  /**
  * advanced_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#advanced_filter EventgridEventSubscription#advanced_filter}
  */
  readonly advancedFilter?: EventgridEventSubscriptionAdvancedFilter[];
  /**
  * azure_function_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#azure_function_endpoint EventgridEventSubscription#azure_function_endpoint}
  */
  readonly azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint[];
  /**
  * eventhub_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_endpoint EventgridEventSubscription#eventhub_endpoint}
  */
  readonly eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint[];
  /**
  * hybrid_connection_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_endpoint EventgridEventSubscription#hybrid_connection_endpoint}
  */
  readonly hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint[];
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#retry_policy EventgridEventSubscription#retry_policy}
  */
  readonly retryPolicy?: EventgridEventSubscriptionRetryPolicy[];
  /**
  * storage_blob_dead_letter_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_blob_dead_letter_destination EventgridEventSubscription#storage_blob_dead_letter_destination}
  */
  readonly storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination[];
  /**
  * storage_queue_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_queue_endpoint EventgridEventSubscription#storage_queue_endpoint}
  */
  readonly storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint[];
  /**
  * subject_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_filter EventgridEventSubscription#subject_filter}
  */
  readonly subjectFilter?: EventgridEventSubscriptionSubjectFilter[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#timeouts EventgridEventSubscription#timeouts}
  */
  readonly timeouts?: EventgridEventSubscriptionTimeouts;
  /**
  * webhook_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#webhook_endpoint EventgridEventSubscription#webhook_endpoint}
  */
  readonly webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint[];
}
export interface EventgridEventSubscriptionAdvancedFilterBoolEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: boolean;
}

function eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterBoolEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterIsNotNull {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

function eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNotNull): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
}

function eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberLessThan {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThan): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#value EventgridEventSubscription#value}
  */
  readonly value: number;
}

function eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterNumberNotInRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: number[];
}

function eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.numberToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotContains {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotContains): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotEndsWith {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilterStringNotIn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#key EventgridEventSubscription#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#values EventgridEventSubscription#values}
  */
  readonly values: string[];
}

function eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform(struct?: EventgridEventSubscriptionAdvancedFilterStringNotIn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface EventgridEventSubscriptionAdvancedFilter {
  /**
  * bool_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#bool_equals EventgridEventSubscription#bool_equals}
  */
  readonly boolEquals?: EventgridEventSubscriptionAdvancedFilterBoolEquals[];
  /**
  * is_not_null block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#is_not_null EventgridEventSubscription#is_not_null}
  */
  readonly isNotNull?: EventgridEventSubscriptionAdvancedFilterIsNotNull[];
  /**
  * is_null_or_undefined block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#is_null_or_undefined EventgridEventSubscription#is_null_or_undefined}
  */
  readonly isNullOrUndefined?: EventgridEventSubscriptionAdvancedFilterIsNullOrUndefined[];
  /**
  * number_greater_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_greater_than EventgridEventSubscription#number_greater_than}
  */
  readonly numberGreaterThan?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThan[];
  /**
  * number_greater_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_greater_than_or_equals EventgridEventSubscription#number_greater_than_or_equals}
  */
  readonly numberGreaterThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEquals[];
  /**
  * number_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_in EventgridEventSubscription#number_in}
  */
  readonly numberIn?: EventgridEventSubscriptionAdvancedFilterNumberIn[];
  /**
  * number_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_in_range EventgridEventSubscription#number_in_range}
  */
  readonly numberInRange?: EventgridEventSubscriptionAdvancedFilterNumberInRange[];
  /**
  * number_less_than block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_less_than EventgridEventSubscription#number_less_than}
  */
  readonly numberLessThan?: EventgridEventSubscriptionAdvancedFilterNumberLessThan[];
  /**
  * number_less_than_or_equals block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_less_than_or_equals EventgridEventSubscription#number_less_than_or_equals}
  */
  readonly numberLessThanOrEquals?: EventgridEventSubscriptionAdvancedFilterNumberLessThanOrEquals[];
  /**
  * number_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_not_in EventgridEventSubscription#number_not_in}
  */
  readonly numberNotIn?: EventgridEventSubscriptionAdvancedFilterNumberNotIn[];
  /**
  * number_not_in_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#number_not_in_range EventgridEventSubscription#number_not_in_range}
  */
  readonly numberNotInRange?: EventgridEventSubscriptionAdvancedFilterNumberNotInRange[];
  /**
  * string_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_begins_with EventgridEventSubscription#string_begins_with}
  */
  readonly stringBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringBeginsWith[];
  /**
  * string_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_contains EventgridEventSubscription#string_contains}
  */
  readonly stringContains?: EventgridEventSubscriptionAdvancedFilterStringContains[];
  /**
  * string_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_ends_with EventgridEventSubscription#string_ends_with}
  */
  readonly stringEndsWith?: EventgridEventSubscriptionAdvancedFilterStringEndsWith[];
  /**
  * string_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_in EventgridEventSubscription#string_in}
  */
  readonly stringIn?: EventgridEventSubscriptionAdvancedFilterStringIn[];
  /**
  * string_not_begins_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_begins_with EventgridEventSubscription#string_not_begins_with}
  */
  readonly stringNotBeginsWith?: EventgridEventSubscriptionAdvancedFilterStringNotBeginsWith[];
  /**
  * string_not_contains block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_contains EventgridEventSubscription#string_not_contains}
  */
  readonly stringNotContains?: EventgridEventSubscriptionAdvancedFilterStringNotContains[];
  /**
  * string_not_ends_with block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_ends_with EventgridEventSubscription#string_not_ends_with}
  */
  readonly stringNotEndsWith?: EventgridEventSubscriptionAdvancedFilterStringNotEndsWith[];
  /**
  * string_not_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#string_not_in EventgridEventSubscription#string_not_in}
  */
  readonly stringNotIn?: EventgridEventSubscriptionAdvancedFilterStringNotIn[];
}

function eventgridEventSubscriptionAdvancedFilterToTerraform(struct?: EventgridEventSubscriptionAdvancedFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bool_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterBoolEqualsToTerraform)(struct!.boolEquals),
    is_not_null: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNotNullToTerraform)(struct!.isNotNull),
    is_null_or_undefined: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterIsNullOrUndefinedToTerraform)(struct!.isNullOrUndefined),
    number_greater_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanToTerraform)(struct!.numberGreaterThan),
    number_greater_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberGreaterThanOrEqualsToTerraform)(struct!.numberGreaterThanOrEquals),
    number_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInToTerraform)(struct!.numberIn),
    number_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberInRangeToTerraform)(struct!.numberInRange),
    number_less_than: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanToTerraform)(struct!.numberLessThan),
    number_less_than_or_equals: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberLessThanOrEqualsToTerraform)(struct!.numberLessThanOrEquals),
    number_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInToTerraform)(struct!.numberNotIn),
    number_not_in_range: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterNumberNotInRangeToTerraform)(struct!.numberNotInRange),
    string_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringBeginsWithToTerraform)(struct!.stringBeginsWith),
    string_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringContainsToTerraform)(struct!.stringContains),
    string_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringEndsWithToTerraform)(struct!.stringEndsWith),
    string_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringInToTerraform)(struct!.stringIn),
    string_not_begins_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotBeginsWithToTerraform)(struct!.stringNotBeginsWith),
    string_not_contains: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotContainsToTerraform)(struct!.stringNotContains),
    string_not_ends_with: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotEndsWithToTerraform)(struct!.stringNotEndsWith),
    string_not_in: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterStringNotInToTerraform)(struct!.stringNotIn),
  }
}

export interface EventgridEventSubscriptionAzureFunctionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#function_id EventgridEventSubscription#function_id}
  */
  readonly functionId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
}

function eventgridEventSubscriptionAzureFunctionEndpointToTerraform(struct?: EventgridEventSubscriptionAzureFunctionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    function_id: cdktf.stringToTerraform(struct!.functionId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
  }
}

export interface EventgridEventSubscriptionEventhubEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#eventhub_id EventgridEventSubscription#eventhub_id}
  */
  readonly eventhubId?: string;
}

function eventgridEventSubscriptionEventhubEndpointToTerraform(struct?: EventgridEventSubscriptionEventhubEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eventhub_id: cdktf.stringToTerraform(struct!.eventhubId),
  }
}

export interface EventgridEventSubscriptionHybridConnectionEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#hybrid_connection_id EventgridEventSubscription#hybrid_connection_id}
  */
  readonly hybridConnectionId?: string;
}

function eventgridEventSubscriptionHybridConnectionEndpointToTerraform(struct?: EventgridEventSubscriptionHybridConnectionEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hybrid_connection_id: cdktf.stringToTerraform(struct!.hybridConnectionId),
  }
}

export interface EventgridEventSubscriptionRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#event_time_to_live EventgridEventSubscription#event_time_to_live}
  */
  readonly eventTimeToLive: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_delivery_attempts EventgridEventSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts: number;
}

function eventgridEventSubscriptionRetryPolicyToTerraform(struct?: EventgridEventSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    event_time_to_live: cdktf.numberToTerraform(struct!.eventTimeToLive),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}

export interface EventgridEventSubscriptionStorageBlobDeadLetterDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_blob_container_name EventgridEventSubscription#storage_blob_container_name}
  */
  readonly storageBlobContainerName: string;
}

function eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform(struct?: EventgridEventSubscriptionStorageBlobDeadLetterDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
    storage_blob_container_name: cdktf.stringToTerraform(struct!.storageBlobContainerName),
  }
}

export interface EventgridEventSubscriptionStorageQueueEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#queue_name EventgridEventSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#storage_account_id EventgridEventSubscription#storage_account_id}
  */
  readonly storageAccountId: string;
}

function eventgridEventSubscriptionStorageQueueEndpointToTerraform(struct?: EventgridEventSubscriptionStorageQueueEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    storage_account_id: cdktf.stringToTerraform(struct!.storageAccountId),
  }
}

export interface EventgridEventSubscriptionSubjectFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#case_sensitive EventgridEventSubscription#case_sensitive}
  */
  readonly caseSensitive?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_begins_with EventgridEventSubscription#subject_begins_with}
  */
  readonly subjectBeginsWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#subject_ends_with EventgridEventSubscription#subject_ends_with}
  */
  readonly subjectEndsWith?: string;
}

function eventgridEventSubscriptionSubjectFilterToTerraform(struct?: EventgridEventSubscriptionSubjectFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    subject_begins_with: cdktf.stringToTerraform(struct!.subjectBeginsWith),
    subject_ends_with: cdktf.stringToTerraform(struct!.subjectEndsWith),
  }
}

export interface EventgridEventSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#create EventgridEventSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#delete EventgridEventSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#read EventgridEventSubscription#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#update EventgridEventSubscription#update}
  */
  readonly update?: string;
}

function eventgridEventSubscriptionTimeoutsToTerraform(struct?: EventgridEventSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface EventgridEventSubscriptionWebhookEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#active_directory_app_id_or_uri EventgridEventSubscription#active_directory_app_id_or_uri}
  */
  readonly activeDirectoryAppIdOrUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#active_directory_tenant_id EventgridEventSubscription#active_directory_tenant_id}
  */
  readonly activeDirectoryTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#max_events_per_batch EventgridEventSubscription#max_events_per_batch}
  */
  readonly maxEventsPerBatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#preferred_batch_size_in_kilobytes EventgridEventSubscription#preferred_batch_size_in_kilobytes}
  */
  readonly preferredBatchSizeInKilobytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html#url EventgridEventSubscription#url}
  */
  readonly url: string;
}

function eventgridEventSubscriptionWebhookEndpointToTerraform(struct?: EventgridEventSubscriptionWebhookEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    active_directory_app_id_or_uri: cdktf.stringToTerraform(struct!.activeDirectoryAppIdOrUri),
    active_directory_tenant_id: cdktf.stringToTerraform(struct!.activeDirectoryTenantId),
    max_events_per_batch: cdktf.numberToTerraform(struct!.maxEventsPerBatch),
    preferred_batch_size_in_kilobytes: cdktf.numberToTerraform(struct!.preferredBatchSizeInKilobytes),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html azurerm_eventgrid_event_subscription}
*/
export class EventgridEventSubscription extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_event_subscription.html azurerm_eventgrid_event_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridEventSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridEventSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_event_subscription',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventDeliverySchema = config.eventDeliverySchema;
    this._eventhubEndpointId = config.eventhubEndpointId;
    this._expirationTimeUtc = config.expirationTimeUtc;
    this._hybridConnectionEndpointId = config.hybridConnectionEndpointId;
    this._includedEventTypes = config.includedEventTypes;
    this._labels = config.labels;
    this._name = config.name;
    this._scope = config.scope;
    this._serviceBusQueueEndpointId = config.serviceBusQueueEndpointId;
    this._serviceBusTopicEndpointId = config.serviceBusTopicEndpointId;
    this._topicName = config.topicName;
    this._advancedFilter = config.advancedFilter;
    this._azureFunctionEndpoint = config.azureFunctionEndpoint;
    this._eventhubEndpoint = config.eventhubEndpoint;
    this._hybridConnectionEndpoint = config.hybridConnectionEndpoint;
    this._retryPolicy = config.retryPolicy;
    this._storageBlobDeadLetterDestination = config.storageBlobDeadLetterDestination;
    this._storageQueueEndpoint = config.storageQueueEndpoint;
    this._subjectFilter = config.subjectFilter;
    this._timeouts = config.timeouts;
    this._webhookEndpoint = config.webhookEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_delivery_schema - computed: false, optional: true, required: false
  private _eventDeliverySchema?: string;
  public get eventDeliverySchema() {
    return this.getStringAttribute('event_delivery_schema');
  }
  public set eventDeliverySchema(value: string ) {
    this._eventDeliverySchema = value;
  }
  public resetEventDeliverySchema() {
    this._eventDeliverySchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDeliverySchemaInput() {
    return this._eventDeliverySchema
  }

  // eventhub_endpoint_id - computed: true, optional: true, required: false
  private _eventhubEndpointId?: string;
  public get eventhubEndpointId() {
    return this.getStringAttribute('eventhub_endpoint_id');
  }
  public set eventhubEndpointId(value: string) {
    this._eventhubEndpointId = value;
  }
  public resetEventhubEndpointId() {
    this._eventhubEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointIdInput() {
    return this._eventhubEndpointId
  }

  // expiration_time_utc - computed: false, optional: true, required: false
  private _expirationTimeUtc?: string;
  public get expirationTimeUtc() {
    return this.getStringAttribute('expiration_time_utc');
  }
  public set expirationTimeUtc(value: string ) {
    this._expirationTimeUtc = value;
  }
  public resetExpirationTimeUtc() {
    this._expirationTimeUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUtcInput() {
    return this._expirationTimeUtc
  }

  // hybrid_connection_endpoint_id - computed: true, optional: true, required: false
  private _hybridConnectionEndpointId?: string;
  public get hybridConnectionEndpointId() {
    return this.getStringAttribute('hybrid_connection_endpoint_id');
  }
  public set hybridConnectionEndpointId(value: string) {
    this._hybridConnectionEndpointId = value;
  }
  public resetHybridConnectionEndpointId() {
    this._hybridConnectionEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointIdInput() {
    return this._hybridConnectionEndpointId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_event_types - computed: true, optional: true, required: false
  private _includedEventTypes?: string[];
  public get includedEventTypes() {
    return this.getListAttribute('included_event_types');
  }
  public set includedEventTypes(value: string[]) {
    this._includedEventTypes = value;
  }
  public resetIncludedEventTypes() {
    this._includedEventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEventTypesInput() {
    return this._includedEventTypes
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[];
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[] ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // service_bus_queue_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusQueueEndpointId?: string;
  public get serviceBusQueueEndpointId() {
    return this.getStringAttribute('service_bus_queue_endpoint_id');
  }
  public set serviceBusQueueEndpointId(value: string ) {
    this._serviceBusQueueEndpointId = value;
  }
  public resetServiceBusQueueEndpointId() {
    this._serviceBusQueueEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusQueueEndpointIdInput() {
    return this._serviceBusQueueEndpointId
  }

  // service_bus_topic_endpoint_id - computed: false, optional: true, required: false
  private _serviceBusTopicEndpointId?: string;
  public get serviceBusTopicEndpointId() {
    return this.getStringAttribute('service_bus_topic_endpoint_id');
  }
  public set serviceBusTopicEndpointId(value: string ) {
    this._serviceBusTopicEndpointId = value;
  }
  public resetServiceBusTopicEndpointId() {
    this._serviceBusTopicEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBusTopicEndpointIdInput() {
    return this._serviceBusTopicEndpointId
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string;
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName
  }

  // advanced_filter - computed: false, optional: true, required: false
  private _advancedFilter?: EventgridEventSubscriptionAdvancedFilter[];
  public get advancedFilter() {
    return this.interpolationForAttribute('advanced_filter') as any;
  }
  public set advancedFilter(value: EventgridEventSubscriptionAdvancedFilter[] ) {
    this._advancedFilter = value;
  }
  public resetAdvancedFilter() {
    this._advancedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedFilterInput() {
    return this._advancedFilter
  }

  // azure_function_endpoint - computed: false, optional: true, required: false
  private _azureFunctionEndpoint?: EventgridEventSubscriptionAzureFunctionEndpoint[];
  public get azureFunctionEndpoint() {
    return this.interpolationForAttribute('azure_function_endpoint') as any;
  }
  public set azureFunctionEndpoint(value: EventgridEventSubscriptionAzureFunctionEndpoint[] ) {
    this._azureFunctionEndpoint = value;
  }
  public resetAzureFunctionEndpoint() {
    this._azureFunctionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionEndpointInput() {
    return this._azureFunctionEndpoint
  }

  // eventhub_endpoint - computed: false, optional: true, required: false
  private _eventhubEndpoint?: EventgridEventSubscriptionEventhubEndpoint[];
  public get eventhubEndpoint() {
    return this.interpolationForAttribute('eventhub_endpoint') as any;
  }
  public set eventhubEndpoint(value: EventgridEventSubscriptionEventhubEndpoint[] ) {
    this._eventhubEndpoint = value;
  }
  public resetEventhubEndpoint() {
    this._eventhubEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubEndpointInput() {
    return this._eventhubEndpoint
  }

  // hybrid_connection_endpoint - computed: false, optional: true, required: false
  private _hybridConnectionEndpoint?: EventgridEventSubscriptionHybridConnectionEndpoint[];
  public get hybridConnectionEndpoint() {
    return this.interpolationForAttribute('hybrid_connection_endpoint') as any;
  }
  public set hybridConnectionEndpoint(value: EventgridEventSubscriptionHybridConnectionEndpoint[] ) {
    this._hybridConnectionEndpoint = value;
  }
  public resetHybridConnectionEndpoint() {
    this._hybridConnectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridConnectionEndpointInput() {
    return this._hybridConnectionEndpoint
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: EventgridEventSubscriptionRetryPolicy[];
  public get retryPolicy() {
    return this.interpolationForAttribute('retry_policy') as any;
  }
  public set retryPolicy(value: EventgridEventSubscriptionRetryPolicy[] ) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // storage_blob_dead_letter_destination - computed: false, optional: true, required: false
  private _storageBlobDeadLetterDestination?: EventgridEventSubscriptionStorageBlobDeadLetterDestination[];
  public get storageBlobDeadLetterDestination() {
    return this.interpolationForAttribute('storage_blob_dead_letter_destination') as any;
  }
  public set storageBlobDeadLetterDestination(value: EventgridEventSubscriptionStorageBlobDeadLetterDestination[] ) {
    this._storageBlobDeadLetterDestination = value;
  }
  public resetStorageBlobDeadLetterDestination() {
    this._storageBlobDeadLetterDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlobDeadLetterDestinationInput() {
    return this._storageBlobDeadLetterDestination
  }

  // storage_queue_endpoint - computed: false, optional: true, required: false
  private _storageQueueEndpoint?: EventgridEventSubscriptionStorageQueueEndpoint[];
  public get storageQueueEndpoint() {
    return this.interpolationForAttribute('storage_queue_endpoint') as any;
  }
  public set storageQueueEndpoint(value: EventgridEventSubscriptionStorageQueueEndpoint[] ) {
    this._storageQueueEndpoint = value;
  }
  public resetStorageQueueEndpoint() {
    this._storageQueueEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQueueEndpointInput() {
    return this._storageQueueEndpoint
  }

  // subject_filter - computed: false, optional: true, required: false
  private _subjectFilter?: EventgridEventSubscriptionSubjectFilter[];
  public get subjectFilter() {
    return this.interpolationForAttribute('subject_filter') as any;
  }
  public set subjectFilter(value: EventgridEventSubscriptionSubjectFilter[] ) {
    this._subjectFilter = value;
  }
  public resetSubjectFilter() {
    this._subjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectFilterInput() {
    return this._subjectFilter
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridEventSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridEventSubscriptionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // webhook_endpoint - computed: false, optional: true, required: false
  private _webhookEndpoint?: EventgridEventSubscriptionWebhookEndpoint[];
  public get webhookEndpoint() {
    return this.interpolationForAttribute('webhook_endpoint') as any;
  }
  public set webhookEndpoint(value: EventgridEventSubscriptionWebhookEndpoint[] ) {
    this._webhookEndpoint = value;
  }
  public resetWebhookEndpoint() {
    this._webhookEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookEndpointInput() {
    return this._webhookEndpoint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_delivery_schema: cdktf.stringToTerraform(this._eventDeliverySchema),
      eventhub_endpoint_id: cdktf.stringToTerraform(this._eventhubEndpointId),
      expiration_time_utc: cdktf.stringToTerraform(this._expirationTimeUtc),
      hybrid_connection_endpoint_id: cdktf.stringToTerraform(this._hybridConnectionEndpointId),
      included_event_types: cdktf.listMapper(cdktf.stringToTerraform)(this._includedEventTypes),
      labels: cdktf.listMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      service_bus_queue_endpoint_id: cdktf.stringToTerraform(this._serviceBusQueueEndpointId),
      service_bus_topic_endpoint_id: cdktf.stringToTerraform(this._serviceBusTopicEndpointId),
      topic_name: cdktf.stringToTerraform(this._topicName),
      advanced_filter: cdktf.listMapper(eventgridEventSubscriptionAdvancedFilterToTerraform)(this._advancedFilter),
      azure_function_endpoint: cdktf.listMapper(eventgridEventSubscriptionAzureFunctionEndpointToTerraform)(this._azureFunctionEndpoint),
      eventhub_endpoint: cdktf.listMapper(eventgridEventSubscriptionEventhubEndpointToTerraform)(this._eventhubEndpoint),
      hybrid_connection_endpoint: cdktf.listMapper(eventgridEventSubscriptionHybridConnectionEndpointToTerraform)(this._hybridConnectionEndpoint),
      retry_policy: cdktf.listMapper(eventgridEventSubscriptionRetryPolicyToTerraform)(this._retryPolicy),
      storage_blob_dead_letter_destination: cdktf.listMapper(eventgridEventSubscriptionStorageBlobDeadLetterDestinationToTerraform)(this._storageBlobDeadLetterDestination),
      storage_queue_endpoint: cdktf.listMapper(eventgridEventSubscriptionStorageQueueEndpointToTerraform)(this._storageQueueEndpoint),
      subject_filter: cdktf.listMapper(eventgridEventSubscriptionSubjectFilterToTerraform)(this._subjectFilter),
      timeouts: eventgridEventSubscriptionTimeoutsToTerraform(this._timeouts),
      webhook_endpoint: cdktf.listMapper(eventgridEventSubscriptionWebhookEndpointToTerraform)(this._webhookEndpoint),
    };
  }
}
