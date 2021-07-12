// https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficManagerEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#endpoint_location TrafficManagerEndpoint#endpoint_location}
  */
  readonly endpointLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#endpoint_status TrafficManagerEndpoint#endpoint_status}
  */
  readonly endpointStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#geo_mappings TrafficManagerEndpoint#geo_mappings}
  */
  readonly geoMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#min_child_endpoints TrafficManagerEndpoint#min_child_endpoints}
  */
  readonly minChildEndpoints?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#minimum_required_child_endpoints_ipv4 TrafficManagerEndpoint#minimum_required_child_endpoints_ipv4}
  */
  readonly minimumRequiredChildEndpointsIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#minimum_required_child_endpoints_ipv6 TrafficManagerEndpoint#minimum_required_child_endpoints_ipv6}
  */
  readonly minimumRequiredChildEndpointsIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#name TrafficManagerEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#priority TrafficManagerEndpoint#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#profile_name TrafficManagerEndpoint#profile_name}
  */
  readonly profileName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#resource_group_name TrafficManagerEndpoint#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#target TrafficManagerEndpoint#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#target_resource_id TrafficManagerEndpoint#target_resource_id}
  */
  readonly targetResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#type TrafficManagerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#weight TrafficManagerEndpoint#weight}
  */
  readonly weight?: number;
  /**
  * custom_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#custom_header TrafficManagerEndpoint#custom_header}
  */
  readonly customHeader?: TrafficManagerEndpointCustomHeader[];
  /**
  * subnet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#subnet TrafficManagerEndpoint#subnet}
  */
  readonly subnet?: TrafficManagerEndpointSubnet[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#timeouts TrafficManagerEndpoint#timeouts}
  */
  readonly timeouts?: TrafficManagerEndpointTimeouts;
}
export interface TrafficManagerEndpointCustomHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#name TrafficManagerEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#value TrafficManagerEndpoint#value}
  */
  readonly value: string;
}

function trafficManagerEndpointCustomHeaderToTerraform(struct?: TrafficManagerEndpointCustomHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface TrafficManagerEndpointSubnet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#first TrafficManagerEndpoint#first}
  */
  readonly first: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#last TrafficManagerEndpoint#last}
  */
  readonly last?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#scope TrafficManagerEndpoint#scope}
  */
  readonly scope?: number;
}

function trafficManagerEndpointSubnetToTerraform(struct?: TrafficManagerEndpointSubnet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    first: cdktf.stringToTerraform(struct!.first),
    last: cdktf.stringToTerraform(struct!.last),
    scope: cdktf.numberToTerraform(struct!.scope),
  }
}

export interface TrafficManagerEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#create TrafficManagerEndpoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#delete TrafficManagerEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#read TrafficManagerEndpoint#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html#update TrafficManagerEndpoint#update}
  */
  readonly update?: string;
}

function trafficManagerEndpointTimeoutsToTerraform(struct?: TrafficManagerEndpointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html azurerm_traffic_manager_endpoint}
*/
export class TrafficManagerEndpoint extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/traffic_manager_endpoint.html azurerm_traffic_manager_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficManagerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficManagerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_traffic_manager_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointLocation = config.endpointLocation;
    this._endpointStatus = config.endpointStatus;
    this._geoMappings = config.geoMappings;
    this._minChildEndpoints = config.minChildEndpoints;
    this._minimumRequiredChildEndpointsIpv4 = config.minimumRequiredChildEndpointsIpv4;
    this._minimumRequiredChildEndpointsIpv6 = config.minimumRequiredChildEndpointsIpv6;
    this._name = config.name;
    this._priority = config.priority;
    this._profileName = config.profileName;
    this._resourceGroupName = config.resourceGroupName;
    this._target = config.target;
    this._targetResourceId = config.targetResourceId;
    this._type = config.type;
    this._weight = config.weight;
    this._customHeader = config.customHeader;
    this._subnet = config.subnet;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_location - computed: true, optional: true, required: false
  private _endpointLocation?: string;
  public get endpointLocation() {
    return this.getStringAttribute('endpoint_location');
  }
  public set endpointLocation(value: string) {
    this._endpointLocation = value;
  }
  public resetEndpointLocation() {
    this._endpointLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointLocationInput() {
    return this._endpointLocation
  }

  // endpoint_monitor_status - computed: true, optional: false, required: false
  public get endpointMonitorStatus() {
    return this.getStringAttribute('endpoint_monitor_status');
  }

  // endpoint_status - computed: true, optional: true, required: false
  private _endpointStatus?: string;
  public get endpointStatus() {
    return this.getStringAttribute('endpoint_status');
  }
  public set endpointStatus(value: string) {
    this._endpointStatus = value;
  }
  public resetEndpointStatus() {
    this._endpointStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointStatusInput() {
    return this._endpointStatus
  }

  // geo_mappings - computed: false, optional: true, required: false
  private _geoMappings?: string[];
  public get geoMappings() {
    return this.getListAttribute('geo_mappings');
  }
  public set geoMappings(value: string[] ) {
    this._geoMappings = value;
  }
  public resetGeoMappings() {
    this._geoMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMappingsInput() {
    return this._geoMappings
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_child_endpoints - computed: false, optional: true, required: false
  private _minChildEndpoints?: number;
  public get minChildEndpoints() {
    return this.getNumberAttribute('min_child_endpoints');
  }
  public set minChildEndpoints(value: number ) {
    this._minChildEndpoints = value;
  }
  public resetMinChildEndpoints() {
    this._minChildEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minChildEndpointsInput() {
    return this._minChildEndpoints
  }

  // minimum_required_child_endpoints_ipv4 - computed: false, optional: true, required: false
  private _minimumRequiredChildEndpointsIpv4?: number;
  public get minimumRequiredChildEndpointsIpv4() {
    return this.getNumberAttribute('minimum_required_child_endpoints_ipv4');
  }
  public set minimumRequiredChildEndpointsIpv4(value: number ) {
    this._minimumRequiredChildEndpointsIpv4 = value;
  }
  public resetMinimumRequiredChildEndpointsIpv4() {
    this._minimumRequiredChildEndpointsIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequiredChildEndpointsIpv4Input() {
    return this._minimumRequiredChildEndpointsIpv4
  }

  // minimum_required_child_endpoints_ipv6 - computed: false, optional: true, required: false
  private _minimumRequiredChildEndpointsIpv6?: number;
  public get minimumRequiredChildEndpointsIpv6() {
    return this.getNumberAttribute('minimum_required_child_endpoints_ipv6');
  }
  public set minimumRequiredChildEndpointsIpv6(value: number ) {
    this._minimumRequiredChildEndpointsIpv6 = value;
  }
  public resetMinimumRequiredChildEndpointsIpv6() {
    this._minimumRequiredChildEndpointsIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumRequiredChildEndpointsIpv6Input() {
    return this._minimumRequiredChildEndpointsIpv6
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName: string;
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName
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

  // target - computed: true, optional: true, required: false
  private _target?: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // target_resource_id - computed: false, optional: true, required: false
  private _targetResourceId?: string;
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string ) {
    this._targetResourceId = value;
  }
  public resetTargetResourceId() {
    this._targetResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number;
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader?: TrafficManagerEndpointCustomHeader[];
  public get customHeader() {
    return this.interpolationForAttribute('custom_header') as any;
  }
  public set customHeader(value: TrafficManagerEndpointCustomHeader[] ) {
    this._customHeader = value;
  }
  public resetCustomHeader() {
    this._customHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: TrafficManagerEndpointSubnet[];
  public get subnet() {
    return this.interpolationForAttribute('subnet') as any;
  }
  public set subnet(value: TrafficManagerEndpointSubnet[] ) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TrafficManagerEndpointTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TrafficManagerEndpointTimeouts ) {
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
      endpoint_location: cdktf.stringToTerraform(this._endpointLocation),
      endpoint_status: cdktf.stringToTerraform(this._endpointStatus),
      geo_mappings: cdktf.listMapper(cdktf.stringToTerraform)(this._geoMappings),
      min_child_endpoints: cdktf.numberToTerraform(this._minChildEndpoints),
      minimum_required_child_endpoints_ipv4: cdktf.numberToTerraform(this._minimumRequiredChildEndpointsIpv4),
      minimum_required_child_endpoints_ipv6: cdktf.numberToTerraform(this._minimumRequiredChildEndpointsIpv6),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      profile_name: cdktf.stringToTerraform(this._profileName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      target: cdktf.stringToTerraform(this._target),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      type: cdktf.stringToTerraform(this._type),
      weight: cdktf.numberToTerraform(this._weight),
      custom_header: cdktf.listMapper(trafficManagerEndpointCustomHeaderToTerraform)(this._customHeader),
      subnet: cdktf.listMapper(trafficManagerEndpointSubnetToTerraform)(this._subnet),
      timeouts: trafficManagerEndpointTimeoutsToTerraform(this._timeouts),
    };
  }
}
