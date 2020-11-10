// https://www.terraform.io/docs/providers/azurerm/r/linux_virtual_machine_scale_set.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LinuxVirtualMachineScaleSetConfig extends TerraformMetaArguments {
  readonly adminPassword?: string;
  readonly adminUsername: string;
  readonly computerNamePrefix?: string;
  readonly customData?: string;
  readonly disablePasswordAuthentication?: boolean;
  readonly doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  readonly evictionPolicy?: string;
  readonly healthProbeId?: string;
  readonly instances: number;
  readonly location: string;
  readonly maxBidPrice?: number;
  readonly name: string;
  readonly overprovision?: boolean;
  readonly priority?: string;
  readonly provisionVmAgent?: boolean;
  readonly proximityPlacementGroupId?: string;
  readonly resourceGroupName: string;
  readonly singlePlacementGroup?: boolean;
  readonly sku: string;
  readonly sourceImageId?: string;
  readonly tags?: { [key: string]: string };
  readonly upgradeMode?: string;
  readonly zoneBalance?: boolean;
  readonly zones?: string[];
  /** additional_capabilities block */
  readonly additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities[];
  /** admin_ssh_key block */
  readonly adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[];
  /** automatic_os_upgrade_policy block */
  readonly automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  /** boot_diagnostics block */
  readonly bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  /** data_disk block */
  readonly dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
  /** identity block */
  readonly identity?: LinuxVirtualMachineScaleSetIdentity[];
  /** network_interface block */
  readonly networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[];
  /** os_disk block */
  readonly osDisk: LinuxVirtualMachineScaleSetOsDisk[];
  /** plan block */
  readonly plan?: LinuxVirtualMachineScaleSetPlan[];
  /** rolling_upgrade_policy block */
  readonly rollingUpgradePolicy?: LinuxVirtualMachineScaleSetRollingUpgradePolicy[];
  /** secret block */
  readonly secret?: LinuxVirtualMachineScaleSetSecret[];
  /** source_image_reference block */
  readonly sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference[];
  /** timeouts block */
  readonly timeouts?: LinuxVirtualMachineScaleSetTimeouts;
}
export interface LinuxVirtualMachineScaleSetAdditionalCapabilities {
  readonly ultraSsdEnabled?: boolean;
}
export interface LinuxVirtualMachineScaleSetAdminSshKey {
  readonly publicKey: string;
  readonly username: string;
}
export interface LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy {
  readonly disableAutomaticRollback: boolean;
  readonly enableAutomaticOsUpgrade: boolean;
}
export interface LinuxVirtualMachineScaleSetBootDiagnostics {
  readonly storageAccountUri: string;
}
export interface LinuxVirtualMachineScaleSetDataDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb: number;
  readonly lun: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
}
export interface LinuxVirtualMachineScaleSetIdentity {
  readonly identityIds?: string[];
  readonly type: string;
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag {
  readonly tag: string;
  readonly type: string;
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress {
  readonly domainNameLabel?: string;
  readonly idleTimeoutInMinutes?: number;
  readonly name: string;
  readonly publicIpPrefixId?: string;
  /** ip_tag block */
  readonly ipTag?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddressIpTag[];
}
export interface LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration {
  readonly applicationGatewayBackendAddressPoolIds?: string[];
  readonly applicationSecurityGroupIds?: string[];
  readonly loadBalancerBackendAddressPoolIds?: string[];
  readonly loadBalancerInboundNatRulesIds?: string[];
  readonly name: string;
  readonly primary?: boolean;
  readonly subnetId?: string;
  readonly version?: string;
  /** public_ip_address block */
  readonly publicIpAddress?: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfigurationPublicIpAddress[];
}
export interface LinuxVirtualMachineScaleSetNetworkInterface {
  readonly dnsServers?: string[];
  readonly enableAcceleratedNetworking?: boolean;
  readonly enableIpForwarding?: boolean;
  readonly name: string;
  readonly networkSecurityGroupId?: string;
  readonly primary?: boolean;
  /** ip_configuration block */
  readonly ipConfiguration: LinuxVirtualMachineScaleSetNetworkInterfaceIpConfiguration[];
}
export interface LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings {
  readonly option: string;
}
export interface LinuxVirtualMachineScaleSetOsDisk {
  readonly caching: string;
  readonly diskEncryptionSetId?: string;
  readonly diskSizeGb?: number;
  readonly storageAccountType: string;
  readonly writeAcceleratorEnabled?: boolean;
  /** diff_disk_settings block */
  readonly diffDiskSettings?: LinuxVirtualMachineScaleSetOsDiskDiffDiskSettings[];
}
export interface LinuxVirtualMachineScaleSetPlan {
  readonly name: string;
  readonly product: string;
  readonly publisher: string;
}
export interface LinuxVirtualMachineScaleSetRollingUpgradePolicy {
  readonly maxBatchInstancePercent: number;
  readonly maxUnhealthyInstancePercent: number;
  readonly maxUnhealthyUpgradedInstancePercent: number;
  readonly pauseTimeBetweenBatches: string;
}
export interface LinuxVirtualMachineScaleSetSecretCertificate {
  readonly url: string;
}
export interface LinuxVirtualMachineScaleSetSecret {
  readonly keyVaultId: string;
  /** certificate block */
  readonly certificate: LinuxVirtualMachineScaleSetSecretCertificate[];
}
export interface LinuxVirtualMachineScaleSetSourceImageReference {
  readonly offer: string;
  readonly publisher: string;
  readonly sku: string;
  readonly version: string;
}
export interface LinuxVirtualMachineScaleSetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class LinuxVirtualMachineScaleSet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LinuxVirtualMachineScaleSetConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_linux_virtual_machine_scale_set',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPassword = config.adminPassword;
    this._adminUsername = config.adminUsername;
    this._computerNamePrefix = config.computerNamePrefix;
    this._customData = config.customData;
    this._disablePasswordAuthentication = config.disablePasswordAuthentication;
    this._doNotRunExtensionsOnOverprovisionedMachines = config.doNotRunExtensionsOnOverprovisionedMachines;
    this._evictionPolicy = config.evictionPolicy;
    this._healthProbeId = config.healthProbeId;
    this._instances = config.instances;
    this._location = config.location;
    this._maxBidPrice = config.maxBidPrice;
    this._name = config.name;
    this._overprovision = config.overprovision;
    this._priority = config.priority;
    this._provisionVmAgent = config.provisionVmAgent;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._resourceGroupName = config.resourceGroupName;
    this._singlePlacementGroup = config.singlePlacementGroup;
    this._sku = config.sku;
    this._sourceImageId = config.sourceImageId;
    this._tags = config.tags;
    this._upgradeMode = config.upgradeMode;
    this._zoneBalance = config.zoneBalance;
    this._zones = config.zones;
    this._additionalCapabilities = config.additionalCapabilities;
    this._adminSshKey = config.adminSshKey;
    this._automaticOsUpgradePolicy = config.automaticOsUpgradePolicy;
    this._bootDiagnostics = config.bootDiagnostics;
    this._dataDisk = config.dataDisk;
    this._identity = config.identity;
    this._networkInterface = config.networkInterface;
    this._osDisk = config.osDisk;
    this._plan = config.plan;
    this._rollingUpgradePolicy = config.rollingUpgradePolicy;
    this._secret = config.secret;
    this._sourceImageReference = config.sourceImageReference;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string;
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string ) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername: string;
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername
  }

  // computer_name_prefix - computed: true, optional: true, required: false
  private _computerNamePrefix?: string;
  public get computerNamePrefix() {
    return this.getStringAttribute('computer_name_prefix');
  }
  public set computerNamePrefix(value: string) {
    this._computerNamePrefix = value;
  }
  public resetComputerNamePrefix() {
    this._computerNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computerNamePrefixInput() {
    return this._computerNamePrefix
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string;
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string ) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData
  }

  // disable_password_authentication - computed: false, optional: true, required: false
  private _disablePasswordAuthentication?: boolean;
  public get disablePasswordAuthentication() {
    return this.getBooleanAttribute('disable_password_authentication');
  }
  public set disablePasswordAuthentication(value: boolean ) {
    this._disablePasswordAuthentication = value;
  }
  public resetDisablePasswordAuthentication() {
    this._disablePasswordAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthenticationInput() {
    return this._disablePasswordAuthentication
  }

  // do_not_run_extensions_on_overprovisioned_machines - computed: false, optional: true, required: false
  private _doNotRunExtensionsOnOverprovisionedMachines?: boolean;
  public get doNotRunExtensionsOnOverprovisionedMachines() {
    return this.getBooleanAttribute('do_not_run_extensions_on_overprovisioned_machines');
  }
  public set doNotRunExtensionsOnOverprovisionedMachines(value: boolean ) {
    this._doNotRunExtensionsOnOverprovisionedMachines = value;
  }
  public resetDoNotRunExtensionsOnOverprovisionedMachines() {
    this._doNotRunExtensionsOnOverprovisionedMachines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRunExtensionsOnOverprovisionedMachinesInput() {
    return this._doNotRunExtensionsOnOverprovisionedMachines
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string;
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string ) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // health_probe_id - computed: false, optional: true, required: false
  private _healthProbeId?: string;
  public get healthProbeId() {
    return this.getStringAttribute('health_probe_id');
  }
  public set healthProbeId(value: string ) {
    this._healthProbeId = value;
  }
  public resetHealthProbeId() {
    this._healthProbeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeIdInput() {
    return this._healthProbeId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances: number;
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
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

  // max_bid_price - computed: false, optional: true, required: false
  private _maxBidPrice?: number;
  public get maxBidPrice() {
    return this.getNumberAttribute('max_bid_price');
  }
  public set maxBidPrice(value: number ) {
    this._maxBidPrice = value;
  }
  public resetMaxBidPrice() {
    this._maxBidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBidPriceInput() {
    return this._maxBidPrice
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

  // overprovision - computed: false, optional: true, required: false
  private _overprovision?: boolean;
  public get overprovision() {
    return this.getBooleanAttribute('overprovision');
  }
  public set overprovision(value: boolean ) {
    this._overprovision = value;
  }
  public resetOverprovision() {
    this._overprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overprovisionInput() {
    return this._overprovision
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string;
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string ) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // provision_vm_agent - computed: false, optional: true, required: false
  private _provisionVmAgent?: boolean;
  public get provisionVmAgent() {
    return this.getBooleanAttribute('provision_vm_agent');
  }
  public set provisionVmAgent(value: boolean ) {
    this._provisionVmAgent = value;
  }
  public resetProvisionVmAgent() {
    this._provisionVmAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionVmAgentInput() {
    return this._provisionVmAgent
  }

  // proximity_placement_group_id - computed: false, optional: true, required: false
  private _proximityPlacementGroupId?: string;
  public get proximityPlacementGroupId() {
    return this.getStringAttribute('proximity_placement_group_id');
  }
  public set proximityPlacementGroupId(value: string ) {
    this._proximityPlacementGroupId = value;
  }
  public resetProximityPlacementGroupId() {
    this._proximityPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityPlacementGroupIdInput() {
    return this._proximityPlacementGroupId
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

  // single_placement_group - computed: false, optional: true, required: false
  private _singlePlacementGroup?: boolean;
  public get singlePlacementGroup() {
    return this.getBooleanAttribute('single_placement_group');
  }
  public set singlePlacementGroup(value: boolean ) {
    this._singlePlacementGroup = value;
  }
  public resetSinglePlacementGroup() {
    this._singlePlacementGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singlePlacementGroupInput() {
    return this._singlePlacementGroup
  }

  // sku - computed: false, optional: false, required: true
  private _sku: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // source_image_id - computed: false, optional: true, required: false
  private _sourceImageId?: string;
  public get sourceImageId() {
    return this.getStringAttribute('source_image_id');
  }
  public set sourceImageId(value: string ) {
    this._sourceImageId = value;
  }
  public resetSourceImageId() {
    this._sourceImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageIdInput() {
    return this._sourceImageId
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

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // upgrade_mode - computed: false, optional: true, required: false
  private _upgradeMode?: string;
  public get upgradeMode() {
    return this.getStringAttribute('upgrade_mode');
  }
  public set upgradeMode(value: string ) {
    this._upgradeMode = value;
  }
  public resetUpgradeMode() {
    this._upgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeModeInput() {
    return this._upgradeMode
  }

  // zone_balance - computed: false, optional: true, required: false
  private _zoneBalance?: boolean;
  public get zoneBalance() {
    return this.getBooleanAttribute('zone_balance');
  }
  public set zoneBalance(value: boolean ) {
    this._zoneBalance = value;
  }
  public resetZoneBalance() {
    this._zoneBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBalanceInput() {
    return this._zoneBalance
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[];
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] ) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // additional_capabilities - computed: false, optional: true, required: false
  private _additionalCapabilities?: LinuxVirtualMachineScaleSetAdditionalCapabilities[];
  public get additionalCapabilities() {
    return this.interpolationForAttribute('additional_capabilities') as any;
  }
  public set additionalCapabilities(value: LinuxVirtualMachineScaleSetAdditionalCapabilities[] ) {
    this._additionalCapabilities = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities
  }

  // admin_ssh_key - computed: false, optional: true, required: false
  private _adminSshKey?: LinuxVirtualMachineScaleSetAdminSshKey[];
  public get adminSshKey() {
    return this.interpolationForAttribute('admin_ssh_key') as any;
  }
  public set adminSshKey(value: LinuxVirtualMachineScaleSetAdminSshKey[] ) {
    this._adminSshKey = value;
  }
  public resetAdminSshKey() {
    this._adminSshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshKeyInput() {
    return this._adminSshKey
  }

  // automatic_os_upgrade_policy - computed: false, optional: true, required: false
  private _automaticOsUpgradePolicy?: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[];
  public get automaticOsUpgradePolicy() {
    return this.interpolationForAttribute('automatic_os_upgrade_policy') as any;
  }
  public set automaticOsUpgradePolicy(value: LinuxVirtualMachineScaleSetAutomaticOsUpgradePolicy[] ) {
    this._automaticOsUpgradePolicy = value;
  }
  public resetAutomaticOsUpgradePolicy() {
    this._automaticOsUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOsUpgradePolicyInput() {
    return this._automaticOsUpgradePolicy
  }

  // boot_diagnostics - computed: false, optional: true, required: false
  private _bootDiagnostics?: LinuxVirtualMachineScaleSetBootDiagnostics[];
  public get bootDiagnostics() {
    return this.interpolationForAttribute('boot_diagnostics') as any;
  }
  public set bootDiagnostics(value: LinuxVirtualMachineScaleSetBootDiagnostics[] ) {
    this._bootDiagnostics = value;
  }
  public resetBootDiagnostics() {
    this._bootDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsInput() {
    return this._bootDiagnostics
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk?: LinuxVirtualMachineScaleSetDataDisk[];
  public get dataDisk() {
    return this.interpolationForAttribute('data_disk') as any;
  }
  public set dataDisk(value: LinuxVirtualMachineScaleSetDataDisk[] ) {
    this._dataDisk = value;
  }
  public resetDataDisk() {
    this._dataDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: LinuxVirtualMachineScaleSetIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: LinuxVirtualMachineScaleSetIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface: LinuxVirtualMachineScaleSetNetworkInterface[];
  public get networkInterface() {
    return this.interpolationForAttribute('network_interface') as any;
  }
  public set networkInterface(value: LinuxVirtualMachineScaleSetNetworkInterface[]) {
    this._networkInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface
  }

  // os_disk - computed: false, optional: false, required: true
  private _osDisk: LinuxVirtualMachineScaleSetOsDisk[];
  public get osDisk() {
    return this.interpolationForAttribute('os_disk') as any;
  }
  public set osDisk(value: LinuxVirtualMachineScaleSetOsDisk[]) {
    this._osDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskInput() {
    return this._osDisk
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: LinuxVirtualMachineScaleSetPlan[];
  public get plan() {
    return this.interpolationForAttribute('plan') as any;
  }
  public set plan(value: LinuxVirtualMachineScaleSetPlan[] ) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan
  }

  // rolling_upgrade_policy - computed: false, optional: true, required: false
  private _rollingUpgradePolicy?: LinuxVirtualMachineScaleSetRollingUpgradePolicy[];
  public get rollingUpgradePolicy() {
    return this.interpolationForAttribute('rolling_upgrade_policy') as any;
  }
  public set rollingUpgradePolicy(value: LinuxVirtualMachineScaleSetRollingUpgradePolicy[] ) {
    this._rollingUpgradePolicy = value;
  }
  public resetRollingUpgradePolicy() {
    this._rollingUpgradePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpgradePolicyInput() {
    return this._rollingUpgradePolicy
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: LinuxVirtualMachineScaleSetSecret[];
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }
  public set secret(value: LinuxVirtualMachineScaleSetSecret[] ) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret
  }

  // source_image_reference - computed: false, optional: true, required: false
  private _sourceImageReference?: LinuxVirtualMachineScaleSetSourceImageReference[];
  public get sourceImageReference() {
    return this.interpolationForAttribute('source_image_reference') as any;
  }
  public set sourceImageReference(value: LinuxVirtualMachineScaleSetSourceImageReference[] ) {
    this._sourceImageReference = value;
  }
  public resetSourceImageReference() {
    this._sourceImageReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageReferenceInput() {
    return this._sourceImageReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LinuxVirtualMachineScaleSetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LinuxVirtualMachineScaleSetTimeouts ) {
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
      admin_password: this._adminPassword,
      admin_username: this._adminUsername,
      computer_name_prefix: this._computerNamePrefix,
      custom_data: this._customData,
      disable_password_authentication: this._disablePasswordAuthentication,
      do_not_run_extensions_on_overprovisioned_machines: this._doNotRunExtensionsOnOverprovisionedMachines,
      eviction_policy: this._evictionPolicy,
      health_probe_id: this._healthProbeId,
      instances: this._instances,
      location: this._location,
      max_bid_price: this._maxBidPrice,
      name: this._name,
      overprovision: this._overprovision,
      priority: this._priority,
      provision_vm_agent: this._provisionVmAgent,
      proximity_placement_group_id: this._proximityPlacementGroupId,
      resource_group_name: this._resourceGroupName,
      single_placement_group: this._singlePlacementGroup,
      sku: this._sku,
      source_image_id: this._sourceImageId,
      tags: this._tags,
      upgrade_mode: this._upgradeMode,
      zone_balance: this._zoneBalance,
      zones: this._zones,
      additional_capabilities: this._additionalCapabilities,
      admin_ssh_key: this._adminSshKey,
      automatic_os_upgrade_policy: this._automaticOsUpgradePolicy,
      boot_diagnostics: this._bootDiagnostics,
      data_disk: this._dataDisk,
      identity: this._identity,
      network_interface: this._networkInterface,
      os_disk: this._osDisk,
      plan: this._plan,
      rolling_upgrade_policy: this._rollingUpgradePolicy,
      secret: this._secret,
      source_image_reference: this._sourceImageReference,
      timeouts: this._timeouts,
    };
  }
}
