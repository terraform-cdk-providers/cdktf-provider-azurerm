// https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SignalrServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#location SignalrService#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#name SignalrService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#resource_group_name SignalrService#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#tags SignalrService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * cors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#cors SignalrService#cors}
  */
  readonly cors?: SignalrServiceCors[];
  /**
  * features block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#features SignalrService#features}
  */
  readonly features?: SignalrServiceFeatures[];
  /**
  * sku block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#sku SignalrService#sku}
  */
  readonly sku: SignalrServiceSku[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#timeouts SignalrService#timeouts}
  */
  readonly timeouts?: SignalrServiceTimeouts;
  /**
  * upstream_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#upstream_endpoint SignalrService#upstream_endpoint}
  */
  readonly upstreamEndpoint?: SignalrServiceUpstreamEndpoint[];
}
export interface SignalrServiceCors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#allowed_origins SignalrService#allowed_origins}
  */
  readonly allowedOrigins: string[];
}

function signalrServiceCorsToTerraform(struct?: SignalrServiceCors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
  }
}

export interface SignalrServiceFeatures {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#flag SignalrService#flag}
  */
  readonly flag: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#value SignalrService#value}
  */
  readonly value: string;
}

function signalrServiceFeaturesToTerraform(struct?: SignalrServiceFeatures): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SignalrServiceSku {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#capacity SignalrService#capacity}
  */
  readonly capacity: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#name SignalrService#name}
  */
  readonly name: string;
}

function signalrServiceSkuToTerraform(struct?: SignalrServiceSku): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    capacity: cdktf.numberToTerraform(struct!.capacity),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface SignalrServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#create SignalrService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#delete SignalrService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#read SignalrService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#update SignalrService#update}
  */
  readonly update?: string;
}

function signalrServiceTimeoutsToTerraform(struct?: SignalrServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface SignalrServiceUpstreamEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#category_pattern SignalrService#category_pattern}
  */
  readonly categoryPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#event_pattern SignalrService#event_pattern}
  */
  readonly eventPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#hub_pattern SignalrService#hub_pattern}
  */
  readonly hubPattern: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html#url_template SignalrService#url_template}
  */
  readonly urlTemplate: string;
}

function signalrServiceUpstreamEndpointToTerraform(struct?: SignalrServiceUpstreamEndpoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    category_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.categoryPattern),
    event_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eventPattern),
    hub_pattern: cdktf.listMapper(cdktf.stringToTerraform)(struct!.hubPattern),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html azurerm_signalr_service}
*/
export class SignalrService extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/signalr_service.html azurerm_signalr_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SignalrServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SignalrServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_signalr_service',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._cors = config.cors;
    this._features = config.features;
    this._sku = config.sku;
    this._timeouts = config.timeouts;
    this._upstreamEndpoint = config.upstreamEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // public_port - computed: true, optional: false, required: false
  public get publicPort() {
    return this.getNumberAttribute('public_port');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // server_port - computed: true, optional: false, required: false
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: SignalrServiceCors[];
  public get cors() {
    return this.interpolationForAttribute('cors') as any;
  }
  public set cors(value: SignalrServiceCors[] ) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors
  }

  // features - computed: false, optional: true, required: false
  private _features?: SignalrServiceFeatures[];
  public get features() {
    return this.interpolationForAttribute('features') as any;
  }
  public set features(value: SignalrServiceFeatures[] ) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features
  }

  // sku - computed: false, optional: false, required: true
  private _sku: SignalrServiceSku[];
  public get sku() {
    return this.interpolationForAttribute('sku') as any;
  }
  public set sku(value: SignalrServiceSku[]) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SignalrServiceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SignalrServiceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // upstream_endpoint - computed: false, optional: true, required: false
  private _upstreamEndpoint?: SignalrServiceUpstreamEndpoint[];
  public get upstreamEndpoint() {
    return this.interpolationForAttribute('upstream_endpoint') as any;
  }
  public set upstreamEndpoint(value: SignalrServiceUpstreamEndpoint[] ) {
    this._upstreamEndpoint = value;
  }
  public resetUpstreamEndpoint() {
    this._upstreamEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamEndpointInput() {
    return this._upstreamEndpoint
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      cors: cdktf.listMapper(signalrServiceCorsToTerraform)(this._cors),
      features: cdktf.listMapper(signalrServiceFeaturesToTerraform)(this._features),
      sku: cdktf.listMapper(signalrServiceSkuToTerraform)(this._sku),
      timeouts: signalrServiceTimeoutsToTerraform(this._timeouts),
      upstream_endpoint: cdktf.listMapper(signalrServiceUpstreamEndpointToTerraform)(this._upstreamEndpoint),
    };
  }
}
