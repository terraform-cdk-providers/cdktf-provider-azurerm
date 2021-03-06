// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsStreamInputIothubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#endpoint StreamAnalyticsStreamInputIothub#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#eventhub_consumer_group_name StreamAnalyticsStreamInputIothub#eventhub_consumer_group_name}
  */
  readonly eventhubConsumerGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#iothub_namespace StreamAnalyticsStreamInputIothub#iothub_namespace}
  */
  readonly iothubNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#name StreamAnalyticsStreamInputIothub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#resource_group_name StreamAnalyticsStreamInputIothub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#shared_access_policy_key StreamAnalyticsStreamInputIothub#shared_access_policy_key}
  */
  readonly sharedAccessPolicyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#shared_access_policy_name StreamAnalyticsStreamInputIothub#shared_access_policy_name}
  */
  readonly sharedAccessPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#stream_analytics_job_name StreamAnalyticsStreamInputIothub#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * serialization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#serialization StreamAnalyticsStreamInputIothub#serialization}
  */
  readonly serialization: StreamAnalyticsStreamInputIothubSerialization[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#timeouts StreamAnalyticsStreamInputIothub#timeouts}
  */
  readonly timeouts?: StreamAnalyticsStreamInputIothubTimeouts;
}
export interface StreamAnalyticsStreamInputIothubSerialization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#encoding StreamAnalyticsStreamInputIothub#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#field_delimiter StreamAnalyticsStreamInputIothub#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#type StreamAnalyticsStreamInputIothub#type}
  */
  readonly type: string;
}

function streamAnalyticsStreamInputIothubSerializationToTerraform(struct?: StreamAnalyticsStreamInputIothubSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsStreamInputIothubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#create StreamAnalyticsStreamInputIothub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#delete StreamAnalyticsStreamInputIothub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#read StreamAnalyticsStreamInputIothub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html#update StreamAnalyticsStreamInputIothub#update}
  */
  readonly update?: string;
}

function streamAnalyticsStreamInputIothubTimeoutsToTerraform(struct?: StreamAnalyticsStreamInputIothubTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html azurerm_stream_analytics_stream_input_iothub}
*/
export class StreamAnalyticsStreamInputIothub extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_iothub.html azurerm_stream_analytics_stream_input_iothub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsStreamInputIothubConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsStreamInputIothubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_stream_input_iothub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpoint = config.endpoint;
    this._eventhubConsumerGroupName = config.eventhubConsumerGroupName;
    this._iothubNamespace = config.iothubNamespace;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: false, required: true
  private _endpoint: string;
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // eventhub_consumer_group_name - computed: false, optional: false, required: true
  private _eventhubConsumerGroupName: string;
  public get eventhubConsumerGroupName() {
    return this.getStringAttribute('eventhub_consumer_group_name');
  }
  public set eventhubConsumerGroupName(value: string) {
    this._eventhubConsumerGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubConsumerGroupNameInput() {
    return this._eventhubConsumerGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iothub_namespace - computed: false, optional: false, required: true
  private _iothubNamespace: string;
  public get iothubNamespace() {
    return this.getStringAttribute('iothub_namespace');
  }
  public set iothubNamespace(value: string) {
    this._iothubNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iothubNamespaceInput() {
    return this._iothubNamespace
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
  private _serialization: StreamAnalyticsStreamInputIothubSerialization[];
  public get serialization() {
    return this.interpolationForAttribute('serialization') as any;
  }
  public set serialization(value: StreamAnalyticsStreamInputIothubSerialization[]) {
    this._serialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsStreamInputIothubTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsStreamInputIothubTimeouts ) {
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
      endpoint: cdktf.stringToTerraform(this._endpoint),
      eventhub_consumer_group_name: cdktf.stringToTerraform(this._eventhubConsumerGroupName),
      iothub_namespace: cdktf.stringToTerraform(this._iothubNamespace),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      shared_access_policy_key: cdktf.stringToTerraform(this._sharedAccessPolicyKey),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      serialization: cdktf.listMapper(streamAnalyticsStreamInputIothubSerializationToTerraform)(this._serialization),
      timeouts: streamAnalyticsStreamInputIothubTimeoutsToTerraform(this._timeouts),
    };
  }
}
