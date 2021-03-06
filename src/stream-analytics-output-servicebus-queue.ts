// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputServicebusQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#name StreamAnalyticsOutputServicebusQueue#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#queue_name StreamAnalyticsOutputServicebusQueue#queue_name}
  */
  readonly queueName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#resource_group_name StreamAnalyticsOutputServicebusQueue#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#servicebus_namespace StreamAnalyticsOutputServicebusQueue#servicebus_namespace}
  */
  readonly servicebusNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#shared_access_policy_key StreamAnalyticsOutputServicebusQueue#shared_access_policy_key}
  */
  readonly sharedAccessPolicyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#shared_access_policy_name StreamAnalyticsOutputServicebusQueue#shared_access_policy_name}
  */
  readonly sharedAccessPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#stream_analytics_job_name StreamAnalyticsOutputServicebusQueue#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * serialization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#serialization StreamAnalyticsOutputServicebusQueue#serialization}
  */
  readonly serialization: StreamAnalyticsOutputServicebusQueueSerialization[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#timeouts StreamAnalyticsOutputServicebusQueue#timeouts}
  */
  readonly timeouts?: StreamAnalyticsOutputServicebusQueueTimeouts;
}
export interface StreamAnalyticsOutputServicebusQueueSerialization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#encoding StreamAnalyticsOutputServicebusQueue#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#field_delimiter StreamAnalyticsOutputServicebusQueue#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#format StreamAnalyticsOutputServicebusQueue#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#type StreamAnalyticsOutputServicebusQueue#type}
  */
  readonly type: string;
}

function streamAnalyticsOutputServicebusQueueSerializationToTerraform(struct?: StreamAnalyticsOutputServicebusQueueSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsOutputServicebusQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#create StreamAnalyticsOutputServicebusQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#delete StreamAnalyticsOutputServicebusQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#read StreamAnalyticsOutputServicebusQueue#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html#update StreamAnalyticsOutputServicebusQueue#update}
  */
  readonly update?: string;
}

function streamAnalyticsOutputServicebusQueueTimeoutsToTerraform(struct?: StreamAnalyticsOutputServicebusQueueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html azurerm_stream_analytics_output_servicebus_queue}
*/
export class StreamAnalyticsOutputServicebusQueue extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_servicebus_queue.html azurerm_stream_analytics_output_servicebus_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsOutputServicebusQueueConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputServicebusQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_servicebus_queue',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._queueName = config.queueName;
    this._resourceGroupName = config.resourceGroupName;
    this._servicebusNamespace = config.servicebusNamespace;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // queue_name - computed: false, optional: false, required: true
  private _queueName: string;
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // servicebus_namespace - computed: false, optional: false, required: true
  private _servicebusNamespace: string;
  public get servicebusNamespace() {
    return this.getStringAttribute('servicebus_namespace');
  }
  public set servicebusNamespace(value: string) {
    this._servicebusNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusNamespaceInput() {
    return this._servicebusNamespace
  }

  // shared_access_policy_key - computed: false, optional: false, required: true
  private _sharedAccessPolicyKey: string;
  public get sharedAccessPolicyKey() {
    return this.getStringAttribute('shared_access_policy_key');
  }
  public set sharedAccessPolicyKey(value: string) {
    this._sharedAccessPolicyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyKeyInput() {
    return this._sharedAccessPolicyKey
  }

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName: string;
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization: StreamAnalyticsOutputServicebusQueueSerialization[];
  public get serialization() {
    return this.interpolationForAttribute('serialization') as any;
  }
  public set serialization(value: StreamAnalyticsOutputServicebusQueueSerialization[]) {
    this._serialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsOutputServicebusQueueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsOutputServicebusQueueTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      queue_name: cdktf.stringToTerraform(this._queueName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      servicebus_namespace: cdktf.stringToTerraform(this._servicebusNamespace),
      shared_access_policy_key: cdktf.stringToTerraform(this._sharedAccessPolicyKey),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      serialization: cdktf.listMapper(streamAnalyticsOutputServicebusQueueSerializationToTerraform)(this._serialization),
      timeouts: streamAnalyticsOutputServicebusQueueTimeoutsToTerraform(this._timeouts),
    };
  }
}
