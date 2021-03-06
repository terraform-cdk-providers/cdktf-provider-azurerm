// https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#account_name NetappVolume#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#create_from_snapshot_resource_id NetappVolume#create_from_snapshot_resource_id}
  */
  readonly createFromSnapshotResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#location NetappVolume#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#name NetappVolume#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#pool_name NetappVolume#pool_name}
  */
  readonly poolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#protocols NetappVolume#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#resource_group_name NetappVolume#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#security_style NetappVolume#security_style}
  */
  readonly securityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#service_level NetappVolume#service_level}
  */
  readonly serviceLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#storage_quota_in_gb NetappVolume#storage_quota_in_gb}
  */
  readonly storageQuotaInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#subnet_id NetappVolume#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#tags NetappVolume#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#volume_path NetappVolume#volume_path}
  */
  readonly volumePath: string;
  /**
  * data_protection_replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#data_protection_replication NetappVolume#data_protection_replication}
  */
  readonly dataProtectionReplication?: NetappVolumeDataProtectionReplication[];
  /**
  * export_policy_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#export_policy_rule NetappVolume#export_policy_rule}
  */
  readonly exportPolicyRule?: NetappVolumeExportPolicyRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#timeouts NetappVolume#timeouts}
  */
  readonly timeouts?: NetappVolumeTimeouts;
}
export interface NetappVolumeDataProtectionReplication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#endpoint_type NetappVolume#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#remote_volume_location NetappVolume#remote_volume_location}
  */
  readonly remoteVolumeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#remote_volume_resource_id NetappVolume#remote_volume_resource_id}
  */
  readonly remoteVolumeResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#replication_frequency NetappVolume#replication_frequency}
  */
  readonly replicationFrequency: string;
}

function netappVolumeDataProtectionReplicationToTerraform(struct?: NetappVolumeDataProtectionReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    remote_volume_location: cdktf.stringToTerraform(struct!.remoteVolumeLocation),
    remote_volume_resource_id: cdktf.stringToTerraform(struct!.remoteVolumeResourceId),
    replication_frequency: cdktf.stringToTerraform(struct!.replicationFrequency),
  }
}

export interface NetappVolumeExportPolicyRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#allowed_clients NetappVolume#allowed_clients}
  */
  readonly allowedClients: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#cifs_enabled NetappVolume#cifs_enabled}
  */
  readonly cifsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#nfsv3_enabled NetappVolume#nfsv3_enabled}
  */
  readonly nfsv3Enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#nfsv4_enabled NetappVolume#nfsv4_enabled}
  */
  readonly nfsv4Enabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#protocols_enabled NetappVolume#protocols_enabled}
  */
  readonly protocolsEnabled?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#root_access_enabled NetappVolume#root_access_enabled}
  */
  readonly rootAccessEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#rule_index NetappVolume#rule_index}
  */
  readonly ruleIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#unix_read_only NetappVolume#unix_read_only}
  */
  readonly unixReadOnly?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#unix_read_write NetappVolume#unix_read_write}
  */
  readonly unixReadWrite?: boolean;
}

function netappVolumeExportPolicyRuleToTerraform(struct?: NetappVolumeExportPolicyRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_clients: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedClients),
    cifs_enabled: cdktf.booleanToTerraform(struct!.cifsEnabled),
    nfsv3_enabled: cdktf.booleanToTerraform(struct!.nfsv3Enabled),
    nfsv4_enabled: cdktf.booleanToTerraform(struct!.nfsv4Enabled),
    protocols_enabled: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocolsEnabled),
    root_access_enabled: cdktf.booleanToTerraform(struct!.rootAccessEnabled),
    rule_index: cdktf.numberToTerraform(struct!.ruleIndex),
    unix_read_only: cdktf.booleanToTerraform(struct!.unixReadOnly),
    unix_read_write: cdktf.booleanToTerraform(struct!.unixReadWrite),
  }
}

export interface NetappVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#create NetappVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#delete NetappVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#read NetappVolume#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html#update NetappVolume#update}
  */
  readonly update?: string;
}

function netappVolumeTimeoutsToTerraform(struct?: NetappVolumeTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html azurerm_netapp_volume}
*/
export class NetappVolume extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/netapp_volume.html azurerm_netapp_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: NetappVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_volume',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._createFromSnapshotResourceId = config.createFromSnapshotResourceId;
    this._location = config.location;
    this._name = config.name;
    this._poolName = config.poolName;
    this._protocols = config.protocols;
    this._resourceGroupName = config.resourceGroupName;
    this._securityStyle = config.securityStyle;
    this._serviceLevel = config.serviceLevel;
    this._storageQuotaInGb = config.storageQuotaInGb;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumePath = config.volumePath;
    this._dataProtectionReplication = config.dataProtectionReplication;
    this._exportPolicyRule = config.exportPolicyRule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // create_from_snapshot_resource_id - computed: true, optional: true, required: false
  private _createFromSnapshotResourceId?: string;
  public get createFromSnapshotResourceId() {
    return this.getStringAttribute('create_from_snapshot_resource_id');
  }
  public set createFromSnapshotResourceId(value: string) {
    this._createFromSnapshotResourceId = value;
  }
  public resetCreateFromSnapshotResourceId() {
    this._createFromSnapshotResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromSnapshotResourceIdInput() {
    return this._createFromSnapshotResourceId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mount_ip_addresses - computed: true, optional: false, required: false
  public get mountIpAddresses() {
    return this.getListAttribute('mount_ip_addresses');
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

  // pool_name - computed: false, optional: false, required: true
  private _poolName: string;
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[];
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols
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

  // security_style - computed: true, optional: true, required: false
  private _securityStyle?: string;
  public get securityStyle() {
    return this.getStringAttribute('security_style');
  }
  public set securityStyle(value: string) {
    this._securityStyle = value;
  }
  public resetSecurityStyle() {
    this._securityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityStyleInput() {
    return this._securityStyle
  }

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel: string;
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel
  }

  // storage_quota_in_gb - computed: false, optional: false, required: true
  private _storageQuotaInGb: number;
  public get storageQuotaInGb() {
    return this.getNumberAttribute('storage_quota_in_gb');
  }
  public set storageQuotaInGb(value: number) {
    this._storageQuotaInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageQuotaInGbInput() {
    return this._storageQuotaInGb
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
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

  // volume_path - computed: false, optional: false, required: true
  private _volumePath: string;
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath
  }

  // data_protection_replication - computed: false, optional: true, required: false
  private _dataProtectionReplication?: NetappVolumeDataProtectionReplication[];
  public get dataProtectionReplication() {
    return this.interpolationForAttribute('data_protection_replication') as any;
  }
  public set dataProtectionReplication(value: NetappVolumeDataProtectionReplication[] ) {
    this._dataProtectionReplication = value;
  }
  public resetDataProtectionReplication() {
    this._dataProtectionReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionReplicationInput() {
    return this._dataProtectionReplication
  }

  // export_policy_rule - computed: false, optional: true, required: false
  private _exportPolicyRule?: NetappVolumeExportPolicyRule[];
  public get exportPolicyRule() {
    return this.interpolationForAttribute('export_policy_rule') as any;
  }
  public set exportPolicyRule(value: NetappVolumeExportPolicyRule[] ) {
    this._exportPolicyRule = value;
  }
  public resetExportPolicyRule() {
    this._exportPolicyRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyRuleInput() {
    return this._exportPolicyRule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappVolumeTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetappVolumeTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      create_from_snapshot_resource_id: cdktf.stringToTerraform(this._createFromSnapshotResourceId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pool_name: cdktf.stringToTerraform(this._poolName),
      protocols: cdktf.listMapper(cdktf.stringToTerraform)(this._protocols),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      security_style: cdktf.stringToTerraform(this._securityStyle),
      service_level: cdktf.stringToTerraform(this._serviceLevel),
      storage_quota_in_gb: cdktf.numberToTerraform(this._storageQuotaInGb),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      volume_path: cdktf.stringToTerraform(this._volumePath),
      data_protection_replication: cdktf.listMapper(netappVolumeDataProtectionReplicationToTerraform)(this._dataProtectionReplication),
      export_policy_rule: cdktf.listMapper(netappVolumeExportPolicyRuleToTerraform)(this._exportPolicyRule),
      timeouts: netappVolumeTimeoutsToTerraform(this._timeouts),
    };
  }
}
