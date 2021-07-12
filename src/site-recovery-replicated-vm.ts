// https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteRecoveryReplicatedVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#managed_disk SiteRecoveryReplicatedVm#managed_disk}
  */
  readonly managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#name SiteRecoveryReplicatedVm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#network_interface SiteRecoveryReplicatedVm#network_interface}
  */
  readonly networkInterface?: SiteRecoveryReplicatedVmNetworkInterface[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#recovery_replication_policy_id SiteRecoveryReplicatedVm#recovery_replication_policy_id}
  */
  readonly recoveryReplicationPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#recovery_vault_name SiteRecoveryReplicatedVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#resource_group_name SiteRecoveryReplicatedVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#source_recovery_fabric_name SiteRecoveryReplicatedVm#source_recovery_fabric_name}
  */
  readonly sourceRecoveryFabricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#source_recovery_protection_container_name SiteRecoveryReplicatedVm#source_recovery_protection_container_name}
  */
  readonly sourceRecoveryProtectionContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#source_vm_id SiteRecoveryReplicatedVm#source_vm_id}
  */
  readonly sourceVmId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_availability_set_id SiteRecoveryReplicatedVm#target_availability_set_id}
  */
  readonly targetAvailabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_network_id SiteRecoveryReplicatedVm#target_network_id}
  */
  readonly targetNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_recovery_fabric_id SiteRecoveryReplicatedVm#target_recovery_fabric_id}
  */
  readonly targetRecoveryFabricId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_recovery_protection_container_id SiteRecoveryReplicatedVm#target_recovery_protection_container_id}
  */
  readonly targetRecoveryProtectionContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}
  */
  readonly targetResourceGroupId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#timeouts SiteRecoveryReplicatedVm#timeouts}
  */
  readonly timeouts?: SiteRecoveryReplicatedVmTimeouts;
}
export interface SiteRecoveryReplicatedVmManagedDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#disk_id SiteRecoveryReplicatedVm#disk_id}
  */
  readonly diskId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#staging_storage_account_id SiteRecoveryReplicatedVm#staging_storage_account_id}
  */
  readonly stagingStorageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_disk_encryption_set_id SiteRecoveryReplicatedVm#target_disk_encryption_set_id}
  */
  readonly targetDiskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_disk_type SiteRecoveryReplicatedVm#target_disk_type}
  */
  readonly targetDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_replica_disk_type SiteRecoveryReplicatedVm#target_replica_disk_type}
  */
  readonly targetReplicaDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_resource_group_id SiteRecoveryReplicatedVm#target_resource_group_id}
  */
  readonly targetResourceGroupId?: string;
}

function siteRecoveryReplicatedVmManagedDiskToTerraform(struct?: SiteRecoveryReplicatedVmManagedDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_id: struct!.diskId === undefined ? null : cdktf.stringToTerraform(struct!.diskId),
    staging_storage_account_id: struct!.stagingStorageAccountId === undefined ? null : cdktf.stringToTerraform(struct!.stagingStorageAccountId),
    target_disk_encryption_set_id: cdktf.stringToTerraform(struct!.targetDiskEncryptionSetId),
    target_disk_type: struct!.targetDiskType === undefined ? null : cdktf.stringToTerraform(struct!.targetDiskType),
    target_replica_disk_type: struct!.targetReplicaDiskType === undefined ? null : cdktf.stringToTerraform(struct!.targetReplicaDiskType),
    target_resource_group_id: struct!.targetResourceGroupId === undefined ? null : cdktf.stringToTerraform(struct!.targetResourceGroupId),
  }
}

export interface SiteRecoveryReplicatedVmNetworkInterface {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#recovery_public_ip_address_id SiteRecoveryReplicatedVm#recovery_public_ip_address_id}
  */
  readonly recoveryPublicIpAddressId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#source_network_interface_id SiteRecoveryReplicatedVm#source_network_interface_id}
  */
  readonly sourceNetworkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_static_ip SiteRecoveryReplicatedVm#target_static_ip}
  */
  readonly targetStaticIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#target_subnet_name SiteRecoveryReplicatedVm#target_subnet_name}
  */
  readonly targetSubnetName?: string;
}

function siteRecoveryReplicatedVmNetworkInterfaceToTerraform(struct?: SiteRecoveryReplicatedVmNetworkInterface): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    recovery_public_ip_address_id: cdktf.stringToTerraform(struct!.recoveryPublicIpAddressId),
    source_network_interface_id: struct!.sourceNetworkInterfaceId === undefined ? null : cdktf.stringToTerraform(struct!.sourceNetworkInterfaceId),
    target_static_ip: struct!.targetStaticIp === undefined ? null : cdktf.stringToTerraform(struct!.targetStaticIp),
    target_subnet_name: struct!.targetSubnetName === undefined ? null : cdktf.stringToTerraform(struct!.targetSubnetName),
  }
}

export interface SiteRecoveryReplicatedVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#create SiteRecoveryReplicatedVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#delete SiteRecoveryReplicatedVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#read SiteRecoveryReplicatedVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html#update SiteRecoveryReplicatedVm#update}
  */
  readonly update?: string;
}

function siteRecoveryReplicatedVmTimeoutsToTerraform(struct?: SiteRecoveryReplicatedVmTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html azurerm_site_recovery_replicated_vm}
*/
export class SiteRecoveryReplicatedVm extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/site_recovery_replicated_vm.html azurerm_site_recovery_replicated_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteRecoveryReplicatedVmConfig
  */
  public constructor(scope: Construct, id: string, config: SiteRecoveryReplicatedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_site_recovery_replicated_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedDisk = config.managedDisk;
    this._name = config.name;
    this._networkInterface = config.networkInterface;
    this._recoveryReplicationPolicyId = config.recoveryReplicationPolicyId;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceRecoveryFabricName = config.sourceRecoveryFabricName;
    this._sourceRecoveryProtectionContainerName = config.sourceRecoveryProtectionContainerName;
    this._sourceVmId = config.sourceVmId;
    this._targetAvailabilitySetId = config.targetAvailabilitySetId;
    this._targetNetworkId = config.targetNetworkId;
    this._targetRecoveryFabricId = config.targetRecoveryFabricId;
    this._targetRecoveryProtectionContainerId = config.targetRecoveryProtectionContainerId;
    this._targetResourceGroupId = config.targetResourceGroupId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_disk - computed: false, optional: true, required: false
  private _managedDisk?: SiteRecoveryReplicatedVmManagedDisk[];
  public get managedDisk() {
    return this.interpolationForAttribute('managed_disk') as any;
  }
  public set managedDisk(value: SiteRecoveryReplicatedVmManagedDisk[] ) {
    this._managedDisk = value;
  }
  public resetManagedDisk() {
    this._managedDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDiskInput() {
    return this._managedDisk
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

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface?: SiteRecoveryReplicatedVmNetworkInterface[]
  public get networkInterface(): SiteRecoveryReplicatedVmNetworkInterface[] {
    return this.interpolationForAttribute('network_interface') as any; // Getting the computed value is not yet implemented
  }
  public set networkInterface(value: SiteRecoveryReplicatedVmNetworkInterface[]) {
    this._networkInterface = value;
  }
  public resetNetworkInterface() {
    this._networkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // recovery_replication_policy_id - computed: false, optional: false, required: true
  private _recoveryReplicationPolicyId: string;
  public get recoveryReplicationPolicyId() {
    return this.getStringAttribute('recovery_replication_policy_id');
  }
  public set recoveryReplicationPolicyId(value: string) {
    this._recoveryReplicationPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryReplicationPolicyIdInput() {
    return this._recoveryReplicationPolicyId
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName: string;
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
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

  // source_recovery_fabric_name - computed: false, optional: false, required: true
  private _sourceRecoveryFabricName: string;
  public get sourceRecoveryFabricName() {
    return this.getStringAttribute('source_recovery_fabric_name');
  }
  public set sourceRecoveryFabricName(value: string) {
    this._sourceRecoveryFabricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryFabricNameInput() {
    return this._sourceRecoveryFabricName
  }

  // source_recovery_protection_container_name - computed: false, optional: false, required: true
  private _sourceRecoveryProtectionContainerName: string;
  public get sourceRecoveryProtectionContainerName() {
    return this.getStringAttribute('source_recovery_protection_container_name');
  }
  public set sourceRecoveryProtectionContainerName(value: string) {
    this._sourceRecoveryProtectionContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRecoveryProtectionContainerNameInput() {
    return this._sourceRecoveryProtectionContainerName
  }

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId: string;
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId
  }

  // target_availability_set_id - computed: false, optional: true, required: false
  private _targetAvailabilitySetId?: string;
  public get targetAvailabilitySetId() {
    return this.getStringAttribute('target_availability_set_id');
  }
  public set targetAvailabilitySetId(value: string ) {
    this._targetAvailabilitySetId = value;
  }
  public resetTargetAvailabilitySetId() {
    this._targetAvailabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAvailabilitySetIdInput() {
    return this._targetAvailabilitySetId
  }

  // target_network_id - computed: true, optional: true, required: false
  private _targetNetworkId?: string;
  public get targetNetworkId() {
    return this.getStringAttribute('target_network_id');
  }
  public set targetNetworkId(value: string) {
    this._targetNetworkId = value;
  }
  public resetTargetNetworkId() {
    this._targetNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkIdInput() {
    return this._targetNetworkId
  }

  // target_recovery_fabric_id - computed: false, optional: false, required: true
  private _targetRecoveryFabricId: string;
  public get targetRecoveryFabricId() {
    return this.getStringAttribute('target_recovery_fabric_id');
  }
  public set targetRecoveryFabricId(value: string) {
    this._targetRecoveryFabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryFabricIdInput() {
    return this._targetRecoveryFabricId
  }

  // target_recovery_protection_container_id - computed: false, optional: false, required: true
  private _targetRecoveryProtectionContainerId: string;
  public get targetRecoveryProtectionContainerId() {
    return this.getStringAttribute('target_recovery_protection_container_id');
  }
  public set targetRecoveryProtectionContainerId(value: string) {
    this._targetRecoveryProtectionContainerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRecoveryProtectionContainerIdInput() {
    return this._targetRecoveryProtectionContainerId
  }

  // target_resource_group_id - computed: false, optional: false, required: true
  private _targetResourceGroupId: string;
  public get targetResourceGroupId() {
    return this.getStringAttribute('target_resource_group_id');
  }
  public set targetResourceGroupId(value: string) {
    this._targetResourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupIdInput() {
    return this._targetResourceGroupId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SiteRecoveryReplicatedVmTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SiteRecoveryReplicatedVmTimeouts ) {
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
      managed_disk: cdktf.listMapper(siteRecoveryReplicatedVmManagedDiskToTerraform)(this._managedDisk),
      name: cdktf.stringToTerraform(this._name),
      network_interface: cdktf.listMapper(siteRecoveryReplicatedVmNetworkInterfaceToTerraform)(this._networkInterface),
      recovery_replication_policy_id: cdktf.stringToTerraform(this._recoveryReplicationPolicyId),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_recovery_fabric_name: cdktf.stringToTerraform(this._sourceRecoveryFabricName),
      source_recovery_protection_container_name: cdktf.stringToTerraform(this._sourceRecoveryProtectionContainerName),
      source_vm_id: cdktf.stringToTerraform(this._sourceVmId),
      target_availability_set_id: cdktf.stringToTerraform(this._targetAvailabilitySetId),
      target_network_id: cdktf.stringToTerraform(this._targetNetworkId),
      target_recovery_fabric_id: cdktf.stringToTerraform(this._targetRecoveryFabricId),
      target_recovery_protection_container_id: cdktf.stringToTerraform(this._targetRecoveryProtectionContainerId),
      target_resource_group_id: cdktf.stringToTerraform(this._targetResourceGroupId),
      timeouts: siteRecoveryReplicatedVmTimeoutsToTerraform(this._timeouts),
    };
  }
}
