// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermKubernetesClusterConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly resourceGroupName: string;
  /** timeouts block */
  readonly timeouts?: DataAzurermKubernetesClusterTimeouts;
}
export class DataAzurermKubernetesClusterAddonProfileAzurePolicy extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterAddonProfileHttpApplicationRouting extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // http_application_routing_zone_name - computed: true, optional: false, required: false
  public get httpApplicationRoutingZoneName() {
    return this.getStringAttribute('http_application_routing_zone_name');
  }
}
export class DataAzurermKubernetesClusterAddonProfileKubeDashboard extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterAddonProfileOmsAgent extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // log_analytics_workspace_id - computed: true, optional: false, required: false
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
}
export class DataAzurermKubernetesClusterAddonProfile extends ComplexComputedList {

  // azure_policy - computed: true, optional: false, required: false
  public get azurePolicy() {
    return this.interpolationForAttribute('azure_policy') as any;
  }

  // http_application_routing - computed: true, optional: false, required: false
  public get httpApplicationRouting() {
    return this.interpolationForAttribute('http_application_routing') as any;
  }

  // kube_dashboard - computed: true, optional: false, required: false
  public get kubeDashboard() {
    return this.interpolationForAttribute('kube_dashboard') as any;
  }

  // oms_agent - computed: true, optional: false, required: false
  public get omsAgent() {
    return this.interpolationForAttribute('oms_agent') as any;
  }
}
export class DataAzurermKubernetesClusterAgentPoolProfile extends ComplexComputedList {

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enable_auto_scaling - computed: true, optional: false, required: false
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }

  // enable_node_public_ip - computed: true, optional: false, required: false
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // max_pods - computed: true, optional: false, required: false
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }

  // min_count - computed: true, optional: false, required: false
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_taints - computed: true, optional: false, required: false
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }

  // os_disk_size_gb - computed: true, optional: false, required: false
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // vnet_subnet_id - computed: true, optional: false, required: false
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
}
export class DataAzurermKubernetesClusterKubeAdminConfig extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermKubernetesClusterKubeConfig extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataAzurermKubernetesClusterLinuxProfileSshKey extends ComplexComputedList {

  // key_data - computed: true, optional: false, required: false
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
}
export class DataAzurermKubernetesClusterLinuxProfile extends ComplexComputedList {

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.interpolationForAttribute('ssh_key') as any;
  }
}
export class DataAzurermKubernetesClusterNetworkProfile extends ComplexComputedList {

  // dns_service_ip - computed: true, optional: false, required: false
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }

  // docker_bridge_cidr - computed: true, optional: false, required: false
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }

  // load_balancer_sku - computed: true, optional: false, required: false
  public get loadBalancerSku() {
    return this.getStringAttribute('load_balancer_sku');
  }

  // network_plugin - computed: true, optional: false, required: false
  public get networkPlugin() {
    return this.getStringAttribute('network_plugin');
  }

  // network_policy - computed: true, optional: false, required: false
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }

  // pod_cidr - computed: true, optional: false, required: false
  public get podCidr() {
    return this.getStringAttribute('pod_cidr');
  }

  // service_cidr - computed: true, optional: false, required: false
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
}
export class DataAzurermKubernetesClusterRoleBasedAccessControlAzureActiveDirectory extends ComplexComputedList {

  // client_app_id - computed: true, optional: false, required: false
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }

  // server_app_id - computed: true, optional: false, required: false
  public get serverAppId() {
    return this.getStringAttribute('server_app_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}
export class DataAzurermKubernetesClusterRoleBasedAccessControl extends ComplexComputedList {

  // azure_active_directory - computed: true, optional: false, required: false
  public get azureActiveDirectory() {
    return this.interpolationForAttribute('azure_active_directory') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataAzurermKubernetesClusterServicePrincipal extends ComplexComputedList {

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
}
export class DataAzurermKubernetesClusterWindowsProfile extends ComplexComputedList {

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
}
export interface DataAzurermKubernetesClusterTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermKubernetesCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAzurermKubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_profile - computed: true, optional: false, required: false
  public addonProfile(index: string) {
    return new DataAzurermKubernetesClusterAddonProfile(this, 'addon_profile', index);
  }

  // agent_pool_profile - computed: true, optional: false, required: false
  public agentPoolProfile(index: string) {
    return new DataAzurermKubernetesClusterAgentPoolProfile(this, 'agent_pool_profile', index);
  }

  // api_server_authorized_ip_ranges - computed: true, optional: false, required: false
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kube_admin_config - computed: true, optional: false, required: false
  public kubeAdminConfig(index: string) {
    return new DataAzurermKubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  public kubeConfig(index: string) {
    return new DataAzurermKubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // linux_profile - computed: true, optional: false, required: false
  public linuxProfile(index: string) {
    return new DataAzurermKubernetesClusterLinuxProfile(this, 'linux_profile', index);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // network_profile - computed: true, optional: false, required: false
  public networkProfile(index: string) {
    return new DataAzurermKubernetesClusterNetworkProfile(this, 'network_profile', index);
  }

  // node_resource_group - computed: true, optional: false, required: false
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: false, required: false
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
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

  // role_based_access_control - computed: true, optional: false, required: false
  public roleBasedAccessControl(index: string) {
    return new DataAzurermKubernetesClusterRoleBasedAccessControl(this, 'role_based_access_control', index);
  }

  // service_principal - computed: true, optional: false, required: false
  public servicePrincipal(index: string) {
    return new DataAzurermKubernetesClusterServicePrincipal(this, 'service_principal', index);
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new StringMap(this, 'tags').lookup(key);
  }

  // windows_profile - computed: true, optional: false, required: false
  public windowsProfile(index: string) {
    return new DataAzurermKubernetesClusterWindowsProfile(this, 'windows_profile', index);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermKubernetesClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermKubernetesClusterTimeouts ) {
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
      name: this._name,
      resource_group_name: this._resourceGroupName,
      timeouts: this._timeouts,
    };
  }
}
