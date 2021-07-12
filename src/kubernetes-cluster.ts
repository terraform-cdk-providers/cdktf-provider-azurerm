// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#api_server_authorized_ip_ranges KubernetesCluster#api_server_authorized_ip_ranges}
  */
  readonly apiServerAuthorizedIpRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#automatic_channel_upgrade KubernetesCluster#automatic_channel_upgrade}
  */
  readonly automaticChannelUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#disk_encryption_set_id KubernetesCluster#disk_encryption_set_id}
  */
  readonly diskEncryptionSetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_prefix KubernetesCluster#dns_prefix}
  */
  readonly dnsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_prefix_private_cluster KubernetesCluster#dns_prefix_private_cluster}
  */
  readonly dnsPrefixPrivateCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_pod_security_policy KubernetesCluster#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubernetes_version KubernetesCluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#location KubernetesCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_resource_group KubernetesCluster#node_resource_group}
  */
  readonly nodeResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_cluster_enabled KubernetesCluster#private_cluster_enabled}
  */
  readonly privateClusterEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_dns_zone_id KubernetesCluster#private_dns_zone_id}
  */
  readonly privateDnsZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#private_link_enabled KubernetesCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#resource_group_name KubernetesCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#sku_tier KubernetesCluster#sku_tier}
  */
  readonly skuTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * addon_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#addon_profile KubernetesCluster#addon_profile}
  */
  readonly addonProfile?: KubernetesClusterAddonProfile[];
  /**
  * auto_scaler_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#auto_scaler_profile KubernetesCluster#auto_scaler_profile}
  */
  readonly autoScalerProfile?: KubernetesClusterAutoScalerProfile[];
  /**
  * default_node_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#default_node_pool KubernetesCluster#default_node_pool}
  */
  readonly defaultNodePool: KubernetesClusterDefaultNodePool[];
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#identity KubernetesCluster#identity}
  */
  readonly identity?: KubernetesClusterIdentity[];
  /**
  * kubelet_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_identity KubernetesCluster#kubelet_identity}
  */
  readonly kubeletIdentity?: KubernetesClusterKubeletIdentity[];
  /**
  * linux_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#linux_profile KubernetesCluster#linux_profile}
  */
  readonly linuxProfile?: KubernetesClusterLinuxProfile[];
  /**
  * network_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_profile KubernetesCluster#network_profile}
  */
  readonly networkProfile?: KubernetesClusterNetworkProfile[];
  /**
  * role_based_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#role_based_access_control KubernetesCluster#role_based_access_control}
  */
  readonly roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  /**
  * service_principal block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#service_principal KubernetesCluster#service_principal}
  */
  readonly servicePrincipal?: KubernetesClusterServicePrincipal[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
  /**
  * windows_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#windows_profile KubernetesCluster#windows_profile}
  */
  readonly windowsProfile?: KubernetesClusterWindowsProfile[];
}
export class KubernetesClusterKubeAdminConfig extends cdktf.ComplexComputedList {

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
export class KubernetesClusterKubeConfig extends cdktf.ComplexComputedList {

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
export interface KubernetesClusterAddonProfileAciConnectorLinux {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_name KubernetesCluster#subnet_name}
  */
  readonly subnetName?: string;
}

function kubernetesClusterAddonProfileAciConnectorLinuxToTerraform(struct?: KubernetesClusterAddonProfileAciConnectorLinux): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}

export interface KubernetesClusterAddonProfileAzurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileAzurePolicyToTerraform(struct?: KubernetesClusterAddonProfileAzurePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileHttpApplicationRouting {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform(struct?: KubernetesClusterAddonProfileHttpApplicationRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileIngressApplicationGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#gateway_id KubernetesCluster#gateway_id}
  */
  readonly gatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#gateway_name KubernetesCluster#gateway_name}
  */
  readonly gatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_cidr KubernetesCluster#subnet_cidr}
  */
  readonly subnetCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
}

function kubernetesClusterAddonProfileIngressApplicationGatewayToTerraform(struct?: KubernetesClusterAddonProfileIngressApplicationGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    gateway_id: cdktf.stringToTerraform(struct!.gatewayId),
    gateway_name: cdktf.stringToTerraform(struct!.gatewayName),
    subnet_cidr: cdktf.stringToTerraform(struct!.subnetCidr),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface KubernetesClusterAddonProfileKubeDashboard {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
}

function kubernetesClusterAddonProfileKubeDashboardToTerraform(struct?: KubernetesClusterAddonProfileKubeDashboard): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface KubernetesClusterAddonProfileOmsAgent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#log_analytics_workspace_id KubernetesCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId?: string;
}

function kubernetesClusterAddonProfileOmsAgentToTerraform(struct?: KubernetesClusterAddonProfileOmsAgent): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
  }
}

export interface KubernetesClusterAddonProfile {
  /**
  * aci_connector_linux block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#aci_connector_linux KubernetesCluster#aci_connector_linux}
  */
  readonly aciConnectorLinux?: KubernetesClusterAddonProfileAciConnectorLinux[];
  /**
  * azure_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_policy KubernetesCluster#azure_policy}
  */
  readonly azurePolicy?: KubernetesClusterAddonProfileAzurePolicy[];
  /**
  * http_application_routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#http_application_routing KubernetesCluster#http_application_routing}
  */
  readonly httpApplicationRouting?: KubernetesClusterAddonProfileHttpApplicationRouting[];
  /**
  * ingress_application_gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#ingress_application_gateway KubernetesCluster#ingress_application_gateway}
  */
  readonly ingressApplicationGateway?: KubernetesClusterAddonProfileIngressApplicationGateway[];
  /**
  * kube_dashboard block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kube_dashboard KubernetesCluster#kube_dashboard}
  */
  readonly kubeDashboard?: KubernetesClusterAddonProfileKubeDashboard[];
  /**
  * oms_agent block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#oms_agent KubernetesCluster#oms_agent}
  */
  readonly omsAgent?: KubernetesClusterAddonProfileOmsAgent[];
}

function kubernetesClusterAddonProfileToTerraform(struct?: KubernetesClusterAddonProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aci_connector_linux: cdktf.listMapper(kubernetesClusterAddonProfileAciConnectorLinuxToTerraform)(struct!.aciConnectorLinux),
    azure_policy: cdktf.listMapper(kubernetesClusterAddonProfileAzurePolicyToTerraform)(struct!.azurePolicy),
    http_application_routing: cdktf.listMapper(kubernetesClusterAddonProfileHttpApplicationRoutingToTerraform)(struct!.httpApplicationRouting),
    ingress_application_gateway: cdktf.listMapper(kubernetesClusterAddonProfileIngressApplicationGatewayToTerraform)(struct!.ingressApplicationGateway),
    kube_dashboard: cdktf.listMapper(kubernetesClusterAddonProfileKubeDashboardToTerraform)(struct!.kubeDashboard),
    oms_agent: cdktf.listMapper(kubernetesClusterAddonProfileOmsAgentToTerraform)(struct!.omsAgent),
  }
}

export interface KubernetesClusterAutoScalerProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#balance_similar_node_groups KubernetesCluster#balance_similar_node_groups}
  */
  readonly balanceSimilarNodeGroups?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#empty_bulk_delete_max KubernetesCluster#empty_bulk_delete_max}
  */
  readonly emptyBulkDeleteMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#expander KubernetesCluster#expander}
  */
  readonly expander?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_graceful_termination_sec KubernetesCluster#max_graceful_termination_sec}
  */
  readonly maxGracefulTerminationSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_node_provisioning_time KubernetesCluster#max_node_provisioning_time}
  */
  readonly maxNodeProvisioningTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_unready_nodes KubernetesCluster#max_unready_nodes}
  */
  readonly maxUnreadyNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_unready_percentage KubernetesCluster#max_unready_percentage}
  */
  readonly maxUnreadyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#new_pod_scale_up_delay KubernetesCluster#new_pod_scale_up_delay}
  */
  readonly newPodScaleUpDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_add KubernetesCluster#scale_down_delay_after_add}
  */
  readonly scaleDownDelayAfterAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_delete KubernetesCluster#scale_down_delay_after_delete}
  */
  readonly scaleDownDelayAfterDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_delay_after_failure KubernetesCluster#scale_down_delay_after_failure}
  */
  readonly scaleDownDelayAfterFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_unneeded KubernetesCluster#scale_down_unneeded}
  */
  readonly scaleDownUnneeded?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_unready KubernetesCluster#scale_down_unready}
  */
  readonly scaleDownUnready?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scale_down_utilization_threshold KubernetesCluster#scale_down_utilization_threshold}
  */
  readonly scaleDownUtilizationThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#scan_interval KubernetesCluster#scan_interval}
  */
  readonly scanInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#skip_nodes_with_local_storage KubernetesCluster#skip_nodes_with_local_storage}
  */
  readonly skipNodesWithLocalStorage?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#skip_nodes_with_system_pods KubernetesCluster#skip_nodes_with_system_pods}
  */
  readonly skipNodesWithSystemPods?: boolean;
}

function kubernetesClusterAutoScalerProfileToTerraform(struct?: KubernetesClusterAutoScalerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    balance_similar_node_groups: cdktf.booleanToTerraform(struct!.balanceSimilarNodeGroups),
    empty_bulk_delete_max: cdktf.stringToTerraform(struct!.emptyBulkDeleteMax),
    expander: cdktf.stringToTerraform(struct!.expander),
    max_graceful_termination_sec: cdktf.stringToTerraform(struct!.maxGracefulTerminationSec),
    max_node_provisioning_time: cdktf.stringToTerraform(struct!.maxNodeProvisioningTime),
    max_unready_nodes: cdktf.numberToTerraform(struct!.maxUnreadyNodes),
    max_unready_percentage: cdktf.numberToTerraform(struct!.maxUnreadyPercentage),
    new_pod_scale_up_delay: cdktf.stringToTerraform(struct!.newPodScaleUpDelay),
    scale_down_delay_after_add: cdktf.stringToTerraform(struct!.scaleDownDelayAfterAdd),
    scale_down_delay_after_delete: cdktf.stringToTerraform(struct!.scaleDownDelayAfterDelete),
    scale_down_delay_after_failure: cdktf.stringToTerraform(struct!.scaleDownDelayAfterFailure),
    scale_down_unneeded: cdktf.stringToTerraform(struct!.scaleDownUnneeded),
    scale_down_unready: cdktf.stringToTerraform(struct!.scaleDownUnready),
    scale_down_utilization_threshold: cdktf.stringToTerraform(struct!.scaleDownUtilizationThreshold),
    scan_interval: cdktf.stringToTerraform(struct!.scanInterval),
    skip_nodes_with_local_storage: cdktf.booleanToTerraform(struct!.skipNodesWithLocalStorage),
    skip_nodes_with_system_pods: cdktf.booleanToTerraform(struct!.skipNodesWithSystemPods),
  }
}

export interface KubernetesClusterDefaultNodePoolKubeletConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#allowed_unsafe_sysctls KubernetesCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#container_log_max_line KubernetesCluster#container_log_max_line}
  */
  readonly containerLogMaxLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#container_log_max_size_mb KubernetesCluster#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_cfs_quota_enabled KubernetesCluster#cpu_cfs_quota_enabled}
  */
  readonly cpuCfsQuotaEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_cfs_quota_period KubernetesCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#cpu_manager_policy KubernetesCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#image_gc_high_threshold KubernetesCluster#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#image_gc_low_threshold KubernetesCluster#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#pod_max_pid KubernetesCluster#pod_max_pid}
  */
  readonly podMaxPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#topology_manager_policy KubernetesCluster#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

function kubernetesClusterDefaultNodePoolKubeletConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolKubeletConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedUnsafeSysctls),
    container_log_max_line: cdktf.numberToTerraform(struct!.containerLogMaxLine),
    container_log_max_size_mb: cdktf.numberToTerraform(struct!.containerLogMaxSizeMb),
    cpu_cfs_quota_enabled: cdktf.booleanToTerraform(struct!.cpuCfsQuotaEnabled),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    image_gc_high_threshold: cdktf.numberToTerraform(struct!.imageGcHighThreshold),
    image_gc_low_threshold: cdktf.numberToTerraform(struct!.imageGcLowThreshold),
    pod_max_pid: cdktf.numberToTerraform(struct!.podMaxPid),
    topology_manager_policy: cdktf.stringToTerraform(struct!.topologyManagerPolicy),
  }
}

export interface KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_aio_max_nr KubernetesCluster#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_file_max KubernetesCluster#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_inotify_max_user_watches KubernetesCluster#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fs_nr_open KubernetesCluster#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kernel_threads_max KubernetesCluster#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_netdev_max_backlog KubernetesCluster#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_optmem_max KubernetesCluster#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_rmem_default KubernetesCluster#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_rmem_max KubernetesCluster#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_somaxconn KubernetesCluster#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_wmem_default KubernetesCluster#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_core_wmem_max KubernetesCluster#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_ip_local_port_range_max KubernetesCluster#net_ipv4_ip_local_port_range_max}
  */
  readonly netIpv4IpLocalPortRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_ip_local_port_range_min KubernetesCluster#net_ipv4_ip_local_port_range_min}
  */
  readonly netIpv4IpLocalPortRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh1 KubernetesCluster#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh2 KubernetesCluster#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_neigh_default_gc_thresh3 KubernetesCluster#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_fin_timeout KubernetesCluster#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_intvl KubernetesCluster#net_ipv4_tcp_keepalive_intvl}
  */
  readonly netIpv4TcpKeepaliveIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_probes KubernetesCluster#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_keepalive_time KubernetesCluster#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_max_syn_backlog KubernetesCluster#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_max_tw_buckets KubernetesCluster#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_ipv4_tcp_tw_reuse KubernetesCluster#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_netfilter_nf_conntrack_buckets KubernetesCluster#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#net_netfilter_nf_conntrack_max KubernetesCluster#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_max_map_count KubernetesCluster#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_swappiness KubernetesCluster#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_vfs_cache_pressure KubernetesCluster#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

function kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fs_aio_max_nr: cdktf.numberToTerraform(struct!.fsAioMaxNr),
    fs_file_max: cdktf.numberToTerraform(struct!.fsFileMax),
    fs_inotify_max_user_watches: cdktf.numberToTerraform(struct!.fsInotifyMaxUserWatches),
    fs_nr_open: cdktf.numberToTerraform(struct!.fsNrOpen),
    kernel_threads_max: cdktf.numberToTerraform(struct!.kernelThreadsMax),
    net_core_netdev_max_backlog: cdktf.numberToTerraform(struct!.netCoreNetdevMaxBacklog),
    net_core_optmem_max: cdktf.numberToTerraform(struct!.netCoreOptmemMax),
    net_core_rmem_default: cdktf.numberToTerraform(struct!.netCoreRmemDefault),
    net_core_rmem_max: cdktf.numberToTerraform(struct!.netCoreRmemMax),
    net_core_somaxconn: cdktf.numberToTerraform(struct!.netCoreSomaxconn),
    net_core_wmem_default: cdktf.numberToTerraform(struct!.netCoreWmemDefault),
    net_core_wmem_max: cdktf.numberToTerraform(struct!.netCoreWmemMax),
    net_ipv4_ip_local_port_range_max: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMax),
    net_ipv4_ip_local_port_range_min: cdktf.numberToTerraform(struct!.netIpv4IpLocalPortRangeMin),
    net_ipv4_neigh_default_gc_thresh1: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh1),
    net_ipv4_neigh_default_gc_thresh2: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh2),
    net_ipv4_neigh_default_gc_thresh3: cdktf.numberToTerraform(struct!.netIpv4NeighDefaultGcThresh3),
    net_ipv4_tcp_fin_timeout: cdktf.numberToTerraform(struct!.netIpv4TcpFinTimeout),
    net_ipv4_tcp_keepalive_intvl: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveIntvl),
    net_ipv4_tcp_keepalive_probes: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveProbes),
    net_ipv4_tcp_keepalive_time: cdktf.numberToTerraform(struct!.netIpv4TcpKeepaliveTime),
    net_ipv4_tcp_max_syn_backlog: cdktf.numberToTerraform(struct!.netIpv4TcpMaxSynBacklog),
    net_ipv4_tcp_max_tw_buckets: cdktf.numberToTerraform(struct!.netIpv4TcpMaxTwBuckets),
    net_ipv4_tcp_tw_reuse: cdktf.booleanToTerraform(struct!.netIpv4TcpTwReuse),
    net_netfilter_nf_conntrack_buckets: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackBuckets),
    net_netfilter_nf_conntrack_max: cdktf.numberToTerraform(struct!.netNetfilterNfConntrackMax),
    vm_max_map_count: cdktf.numberToTerraform(struct!.vmMaxMapCount),
    vm_swappiness: cdktf.numberToTerraform(struct!.vmSwappiness),
    vm_vfs_cache_pressure: cdktf.numberToTerraform(struct!.vmVfsCachePressure),
  }
}

export interface KubernetesClusterDefaultNodePoolLinuxOsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#swap_file_size_mb KubernetesCluster#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#transparent_huge_page_defrag KubernetesCluster#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#transparent_huge_page_enabled KubernetesCluster#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctl_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#sysctl_config KubernetesCluster#sysctl_config}
  */
  readonly sysctlConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfig[];
}

function kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform(struct?: KubernetesClusterDefaultNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctl_config: cdktf.listMapper(kubernetesClusterDefaultNodePoolLinuxOsConfigSysctlConfigToTerraform)(struct!.sysctlConfig),
  }
}

export interface KubernetesClusterDefaultNodePoolUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_surge KubernetesCluster#max_surge}
  */
  readonly maxSurge: string;
}

function kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform(struct?: KubernetesClusterDefaultNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}

export interface KubernetesClusterDefaultNodePool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#availability_zones KubernetesCluster#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_auto_scaling KubernetesCluster#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_host_encryption KubernetesCluster#enable_host_encryption}
  */
  readonly enableHostEncryption?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enable_node_public_ip KubernetesCluster#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#fips_enabled KubernetesCluster#fips_enabled}
  */
  readonly fipsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_disk_type KubernetesCluster#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_count KubernetesCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#max_pods KubernetesCluster#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#min_count KubernetesCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#name KubernetesCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_count KubernetesCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_labels KubernetesCluster#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_public_ip_prefix_id KubernetesCluster#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#node_taints KubernetesCluster#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#only_critical_addons_enabled KubernetesCluster#only_critical_addons_enabled}
  */
  readonly onlyCriticalAddonsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#orchestrator_version KubernetesCluster#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#os_disk_size_gb KubernetesCluster#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#os_disk_type KubernetesCluster#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#proximity_placement_group_id KubernetesCluster#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tags KubernetesCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#type KubernetesCluster#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vm_size KubernetesCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#vnet_subnet_id KubernetesCluster#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * kubelet_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#kubelet_config KubernetesCluster#kubelet_config}
  */
  readonly kubeletConfig?: KubernetesClusterDefaultNodePoolKubeletConfig[];
  /**
  * linux_os_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#linux_os_config KubernetesCluster#linux_os_config}
  */
  readonly linuxOsConfig?: KubernetesClusterDefaultNodePoolLinuxOsConfig[];
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#upgrade_settings KubernetesCluster#upgrade_settings}
  */
  readonly upgradeSettings?: KubernetesClusterDefaultNodePoolUpgradeSettings[];
}

function kubernetesClusterDefaultNodePoolToTerraform(struct?: KubernetesClusterDefaultNodePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.availabilityZones),
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    enable_host_encryption: cdktf.booleanToTerraform(struct!.enableHostEncryption),
    enable_node_public_ip: cdktf.booleanToTerraform(struct!.enableNodePublicIp),
    fips_enabled: cdktf.booleanToTerraform(struct!.fipsEnabled),
    kubelet_disk_type: cdktf.stringToTerraform(struct!.kubeletDiskType),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    max_pods: cdktf.numberToTerraform(struct!.maxPods),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    name: cdktf.stringToTerraform(struct!.name),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.nodeLabels),
    node_public_ip_prefix_id: cdktf.stringToTerraform(struct!.nodePublicIpPrefixId),
    node_taints: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodeTaints),
    only_critical_addons_enabled: cdktf.booleanToTerraform(struct!.onlyCriticalAddonsEnabled),
    orchestrator_version: cdktf.stringToTerraform(struct!.orchestratorVersion),
    os_disk_size_gb: cdktf.numberToTerraform(struct!.osDiskSizeGb),
    os_disk_type: cdktf.stringToTerraform(struct!.osDiskType),
    proximity_placement_group_id: cdktf.stringToTerraform(struct!.proximityPlacementGroupId),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    vnet_subnet_id: cdktf.stringToTerraform(struct!.vnetSubnetId),
    kubelet_config: cdktf.listMapper(kubernetesClusterDefaultNodePoolKubeletConfigToTerraform)(struct!.kubeletConfig),
    linux_os_config: cdktf.listMapper(kubernetesClusterDefaultNodePoolLinuxOsConfigToTerraform)(struct!.linuxOsConfig),
    upgrade_settings: cdktf.listMapper(kubernetesClusterDefaultNodePoolUpgradeSettingsToTerraform)(struct!.upgradeSettings),
  }
}

export interface KubernetesClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#type KubernetesCluster#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#user_assigned_identity_id KubernetesCluster#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

function kubernetesClusterIdentityToTerraform(struct?: KubernetesClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export interface KubernetesClusterKubeletIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_id KubernetesCluster#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#object_id KubernetesCluster#object_id}
  */
  readonly objectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#user_assigned_identity_id KubernetesCluster#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
}

function kubernetesClusterKubeletIdentityToTerraform(struct?: KubernetesClusterKubeletIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}

export interface KubernetesClusterLinuxProfileSshKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#key_data KubernetesCluster#key_data}
  */
  readonly keyData: string;
}

function kubernetesClusterLinuxProfileSshKeyToTerraform(struct?: KubernetesClusterLinuxProfileSshKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_data: cdktf.stringToTerraform(struct!.keyData),
  }
}

export interface KubernetesClusterLinuxProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * ssh_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#ssh_key KubernetesCluster#ssh_key}
  */
  readonly sshKey: KubernetesClusterLinuxProfileSshKey[];
}

function kubernetesClusterLinuxProfileToTerraform(struct?: KubernetesClusterLinuxProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: cdktf.listMapper(kubernetesClusterLinuxProfileSshKeyToTerraform)(struct!.sshKey),
  }
}

export interface KubernetesClusterNetworkProfileLoadBalancerProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#idle_timeout_in_minutes KubernetesCluster#idle_timeout_in_minutes}
  */
  readonly idleTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#managed_outbound_ip_count KubernetesCluster#managed_outbound_ip_count}
  */
  readonly managedOutboundIpCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ip_address_ids KubernetesCluster#outbound_ip_address_ids}
  */
  readonly outboundIpAddressIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ip_prefix_ids KubernetesCluster#outbound_ip_prefix_ids}
  */
  readonly outboundIpPrefixIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_ports_allocated KubernetesCluster#outbound_ports_allocated}
  */
  readonly outboundPortsAllocated?: number;
}

function kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform(struct?: KubernetesClusterNetworkProfileLoadBalancerProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle_timeout_in_minutes: cdktf.numberToTerraform(struct!.idleTimeoutInMinutes),
    managed_outbound_ip_count: cdktf.numberToTerraform(struct!.managedOutboundIpCount),
    outbound_ip_address_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpAddressIds),
    outbound_ip_prefix_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.outboundIpPrefixIds),
    outbound_ports_allocated: cdktf.numberToTerraform(struct!.outboundPortsAllocated),
  }
}

export interface KubernetesClusterNetworkProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#dns_service_ip KubernetesCluster#dns_service_ip}
  */
  readonly dnsServiceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#docker_bridge_cidr KubernetesCluster#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#load_balancer_sku KubernetesCluster#load_balancer_sku}
  */
  readonly loadBalancerSku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_mode KubernetesCluster#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_plugin KubernetesCluster#network_plugin}
  */
  readonly networkPlugin: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#network_policy KubernetesCluster#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#outbound_type KubernetesCluster#outbound_type}
  */
  readonly outboundType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#pod_cidr KubernetesCluster#pod_cidr}
  */
  readonly podCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#service_cidr KubernetesCluster#service_cidr}
  */
  readonly serviceCidr?: string;
  /**
  * load_balancer_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#load_balancer_profile KubernetesCluster#load_balancer_profile}
  */
  readonly loadBalancerProfile?: KubernetesClusterNetworkProfileLoadBalancerProfile[];
}

function kubernetesClusterNetworkProfileToTerraform(struct?: KubernetesClusterNetworkProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_service_ip: cdktf.stringToTerraform(struct!.dnsServiceIp),
    docker_bridge_cidr: cdktf.stringToTerraform(struct!.dockerBridgeCidr),
    load_balancer_sku: cdktf.stringToTerraform(struct!.loadBalancerSku),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    network_plugin: cdktf.stringToTerraform(struct!.networkPlugin),
    network_policy: cdktf.stringToTerraform(struct!.networkPolicy),
    outbound_type: cdktf.stringToTerraform(struct!.outboundType),
    pod_cidr: cdktf.stringToTerraform(struct!.podCidr),
    service_cidr: cdktf.stringToTerraform(struct!.serviceCidr),
    load_balancer_profile: cdktf.listMapper(kubernetesClusterNetworkProfileLoadBalancerProfileToTerraform)(struct!.loadBalancerProfile),
  }
}

export interface KubernetesClusterRoleBasedAccessControlAzureActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_group_object_ids KubernetesCluster#admin_group_object_ids}
  */
  readonly adminGroupObjectIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_rbac_enabled KubernetesCluster#azure_rbac_enabled}
  */
  readonly azureRbacEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_app_id KubernetesCluster#client_app_id}
  */
  readonly clientAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#managed KubernetesCluster#managed}
  */
  readonly managed?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#server_app_id KubernetesCluster#server_app_id}
  */
  readonly serverAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#server_app_secret KubernetesCluster#server_app_secret}
  */
  readonly serverAppSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#tenant_id KubernetesCluster#tenant_id}
  */
  readonly tenantId?: string;
}

function kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform(struct?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_group_object_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.adminGroupObjectIds),
    azure_rbac_enabled: cdktf.booleanToTerraform(struct!.azureRbacEnabled),
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    managed: cdktf.booleanToTerraform(struct!.managed),
    server_app_id: cdktf.stringToTerraform(struct!.serverAppId),
    server_app_secret: cdktf.stringToTerraform(struct!.serverAppSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}

export interface KubernetesClusterRoleBasedAccessControl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean;
  /**
  * azure_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#azure_active_directory KubernetesCluster#azure_active_directory}
  */
  readonly azureActiveDirectory?: KubernetesClusterRoleBasedAccessControlAzureActiveDirectory[];
}

function kubernetesClusterRoleBasedAccessControlToTerraform(struct?: KubernetesClusterRoleBasedAccessControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    azure_active_directory: cdktf.listMapper(kubernetesClusterRoleBasedAccessControlAzureActiveDirectoryToTerraform)(struct!.azureActiveDirectory),
  }
}

export interface KubernetesClusterServicePrincipal {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_id KubernetesCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#client_secret KubernetesCluster#client_secret}
  */
  readonly clientSecret: string;
}

function kubernetesClusterServicePrincipalToTerraform(struct?: KubernetesClusterServicePrincipal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#read KubernetesCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#update KubernetesCluster#update}
  */
  readonly update?: string;
}

function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface KubernetesClusterWindowsProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_password KubernetesCluster#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#admin_username KubernetesCluster#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html#license KubernetesCluster#license}
  */
  readonly license?: string;
}

function kubernetesClusterWindowsProfileToTerraform(struct?: KubernetesClusterWindowsProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    license: cdktf.stringToTerraform(struct!.license),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html azurerm_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster.html azurerm_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
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
    this._apiServerAuthorizedIpRanges = config.apiServerAuthorizedIpRanges;
    this._automaticChannelUpgrade = config.automaticChannelUpgrade;
    this._diskEncryptionSetId = config.diskEncryptionSetId;
    this._dnsPrefix = config.dnsPrefix;
    this._dnsPrefixPrivateCluster = config.dnsPrefixPrivateCluster;
    this._enablePodSecurityPolicy = config.enablePodSecurityPolicy;
    this._kubernetesVersion = config.kubernetesVersion;
    this._location = config.location;
    this._name = config.name;
    this._nodeResourceGroup = config.nodeResourceGroup;
    this._privateClusterEnabled = config.privateClusterEnabled;
    this._privateDnsZoneId = config.privateDnsZoneId;
    this._privateLinkEnabled = config.privateLinkEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._skuTier = config.skuTier;
    this._tags = config.tags;
    this._addonProfile = config.addonProfile;
    this._autoScalerProfile = config.autoScalerProfile;
    this._defaultNodePool = config.defaultNodePool;
    this._identity = config.identity;
    this._kubeletIdentity = config.kubeletIdentity;
    this._linuxProfile = config.linuxProfile;
    this._networkProfile = config.networkProfile;
    this._roleBasedAccessControl = config.roleBasedAccessControl;
    this._servicePrincipal = config.servicePrincipal;
    this._timeouts = config.timeouts;
    this._windowsProfile = config.windowsProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_server_authorized_ip_ranges - computed: false, optional: true, required: false
  private _apiServerAuthorizedIpRanges?: string[];
  public get apiServerAuthorizedIpRanges() {
    return this.getListAttribute('api_server_authorized_ip_ranges');
  }
  public set apiServerAuthorizedIpRanges(value: string[] ) {
    this._apiServerAuthorizedIpRanges = value;
  }
  public resetApiServerAuthorizedIpRanges() {
    this._apiServerAuthorizedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerAuthorizedIpRangesInput() {
    return this._apiServerAuthorizedIpRanges
  }

  // automatic_channel_upgrade - computed: false, optional: true, required: false
  private _automaticChannelUpgrade?: string;
  public get automaticChannelUpgrade() {
    return this.getStringAttribute('automatic_channel_upgrade');
  }
  public set automaticChannelUpgrade(value: string ) {
    this._automaticChannelUpgrade = value;
  }
  public resetAutomaticChannelUpgrade() {
    this._automaticChannelUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticChannelUpgradeInput() {
    return this._automaticChannelUpgrade
  }

  // disk_encryption_set_id - computed: false, optional: true, required: false
  private _diskEncryptionSetId?: string;
  public get diskEncryptionSetId() {
    return this.getStringAttribute('disk_encryption_set_id');
  }
  public set diskEncryptionSetId(value: string ) {
    this._diskEncryptionSetId = value;
  }
  public resetDiskEncryptionSetId() {
    this._diskEncryptionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionSetIdInput() {
    return this._diskEncryptionSetId
  }

  // dns_prefix - computed: false, optional: true, required: false
  private _dnsPrefix?: string;
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }
  public set dnsPrefix(value: string ) {
    this._dnsPrefix = value;
  }
  public resetDnsPrefix() {
    this._dnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixInput() {
    return this._dnsPrefix
  }

  // dns_prefix_private_cluster - computed: false, optional: true, required: false
  private _dnsPrefixPrivateCluster?: string;
  public get dnsPrefixPrivateCluster() {
    return this.getStringAttribute('dns_prefix_private_cluster');
  }
  public set dnsPrefixPrivateCluster(value: string ) {
    this._dnsPrefixPrivateCluster = value;
  }
  public resetDnsPrefixPrivateCluster() {
    this._dnsPrefixPrivateCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrefixPrivateClusterInput() {
    return this._dnsPrefixPrivateCluster
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean;
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean ) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy
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
    return new KubernetesClusterKubeAdminConfig(this, 'kube_admin_config', index);
  }

  // kube_admin_config_raw - computed: true, optional: false, required: false
  public get kubeAdminConfigRaw() {
    return this.getStringAttribute('kube_admin_config_raw');
  }

  // kube_config - computed: true, optional: false, required: false
  public kubeConfig(index: string) {
    return new KubernetesClusterKubeConfig(this, 'kube_config', index);
  }

  // kube_config_raw - computed: true, optional: false, required: false
  public get kubeConfigRaw() {
    return this.getStringAttribute('kube_config_raw');
  }

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string;
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion
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

  // node_resource_group - computed: true, optional: true, required: false
  private _nodeResourceGroup?: string;
  public get nodeResourceGroup() {
    return this.getStringAttribute('node_resource_group');
  }
  public set nodeResourceGroup(value: string) {
    this._nodeResourceGroup = value;
  }
  public resetNodeResourceGroup() {
    this._nodeResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResourceGroupInput() {
    return this._nodeResourceGroup
  }

  // private_cluster_enabled - computed: true, optional: true, required: false
  private _privateClusterEnabled?: boolean;
  public get privateClusterEnabled() {
    return this.getBooleanAttribute('private_cluster_enabled');
  }
  public set privateClusterEnabled(value: boolean) {
    this._privateClusterEnabled = value;
  }
  public resetPrivateClusterEnabled() {
    this._privateClusterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterEnabledInput() {
    return this._privateClusterEnabled
  }

  // private_dns_zone_id - computed: true, optional: true, required: false
  private _privateDnsZoneId?: string;
  public get privateDnsZoneId() {
    return this.getStringAttribute('private_dns_zone_id');
  }
  public set privateDnsZoneId(value: string) {
    this._privateDnsZoneId = value;
  }
  public resetPrivateDnsZoneId() {
    this._privateDnsZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneIdInput() {
    return this._privateDnsZoneId
  }

  // private_fqdn - computed: true, optional: false, required: false
  public get privateFqdn() {
    return this.getStringAttribute('private_fqdn');
  }

  // private_link_enabled - computed: true, optional: true, required: false
  private _privateLinkEnabled?: boolean;
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled
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

  // sku_tier - computed: false, optional: true, required: false
  private _skuTier?: string;
  public get skuTier() {
    return this.getStringAttribute('sku_tier');
  }
  public set skuTier(value: string ) {
    this._skuTier = value;
  }
  public resetSkuTier() {
    this._skuTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuTierInput() {
    return this._skuTier
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

  // addon_profile - computed: false, optional: true, required: false
  private _addonProfile?: KubernetesClusterAddonProfile[];
  public get addonProfile() {
    return this.interpolationForAttribute('addon_profile') as any;
  }
  public set addonProfile(value: KubernetesClusterAddonProfile[] ) {
    this._addonProfile = value;
  }
  public resetAddonProfile() {
    this._addonProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonProfileInput() {
    return this._addonProfile
  }

  // auto_scaler_profile - computed: false, optional: true, required: false
  private _autoScalerProfile?: KubernetesClusterAutoScalerProfile[];
  public get autoScalerProfile() {
    return this.interpolationForAttribute('auto_scaler_profile') as any;
  }
  public set autoScalerProfile(value: KubernetesClusterAutoScalerProfile[] ) {
    this._autoScalerProfile = value;
  }
  public resetAutoScalerProfile() {
    this._autoScalerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalerProfileInput() {
    return this._autoScalerProfile
  }

  // default_node_pool - computed: false, optional: false, required: true
  private _defaultNodePool: KubernetesClusterDefaultNodePool[];
  public get defaultNodePool() {
    return this.interpolationForAttribute('default_node_pool') as any;
  }
  public set defaultNodePool(value: KubernetesClusterDefaultNodePool[]) {
    this._defaultNodePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNodePoolInput() {
    return this._defaultNodePool
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: KubernetesClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: KubernetesClusterIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // kubelet_identity - computed: false, optional: true, required: false
  private _kubeletIdentity?: KubernetesClusterKubeletIdentity[];
  public get kubeletIdentity() {
    return this.interpolationForAttribute('kubelet_identity') as any;
  }
  public set kubeletIdentity(value: KubernetesClusterKubeletIdentity[] ) {
    this._kubeletIdentity = value;
  }
  public resetKubeletIdentity() {
    this._kubeletIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletIdentityInput() {
    return this._kubeletIdentity
  }

  // linux_profile - computed: false, optional: true, required: false
  private _linuxProfile?: KubernetesClusterLinuxProfile[];
  public get linuxProfile() {
    return this.interpolationForAttribute('linux_profile') as any;
  }
  public set linuxProfile(value: KubernetesClusterLinuxProfile[] ) {
    this._linuxProfile = value;
  }
  public resetLinuxProfile() {
    this._linuxProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxProfileInput() {
    return this._linuxProfile
  }

  // network_profile - computed: false, optional: true, required: false
  private _networkProfile?: KubernetesClusterNetworkProfile[];
  public get networkProfile() {
    return this.interpolationForAttribute('network_profile') as any;
  }
  public set networkProfile(value: KubernetesClusterNetworkProfile[] ) {
    this._networkProfile = value;
  }
  public resetNetworkProfile() {
    this._networkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile
  }

  // role_based_access_control - computed: false, optional: true, required: false
  private _roleBasedAccessControl?: KubernetesClusterRoleBasedAccessControl[];
  public get roleBasedAccessControl() {
    return this.interpolationForAttribute('role_based_access_control') as any;
  }
  public set roleBasedAccessControl(value: KubernetesClusterRoleBasedAccessControl[] ) {
    this._roleBasedAccessControl = value;
  }
  public resetRoleBasedAccessControl() {
    this._roleBasedAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAccessControlInput() {
    return this._roleBasedAccessControl
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal?: KubernetesClusterServicePrincipal[];
  public get servicePrincipal() {
    return this.interpolationForAttribute('service_principal') as any;
  }
  public set servicePrincipal(value: KubernetesClusterServicePrincipal[] ) {
    this._servicePrincipal = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KubernetesClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // windows_profile - computed: false, optional: true, required: false
  private _windowsProfile?: KubernetesClusterWindowsProfile[];
  public get windowsProfile() {
    return this.interpolationForAttribute('windows_profile') as any;
  }
  public set windowsProfile(value: KubernetesClusterWindowsProfile[] ) {
    this._windowsProfile = value;
  }
  public resetWindowsProfile() {
    this._windowsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsProfileInput() {
    return this._windowsProfile
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_server_authorized_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(this._apiServerAuthorizedIpRanges),
      automatic_channel_upgrade: cdktf.stringToTerraform(this._automaticChannelUpgrade),
      disk_encryption_set_id: cdktf.stringToTerraform(this._diskEncryptionSetId),
      dns_prefix: cdktf.stringToTerraform(this._dnsPrefix),
      dns_prefix_private_cluster: cdktf.stringToTerraform(this._dnsPrefixPrivateCluster),
      enable_pod_security_policy: cdktf.booleanToTerraform(this._enablePodSecurityPolicy),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      node_resource_group: cdktf.stringToTerraform(this._nodeResourceGroup),
      private_cluster_enabled: cdktf.booleanToTerraform(this._privateClusterEnabled),
      private_dns_zone_id: cdktf.stringToTerraform(this._privateDnsZoneId),
      private_link_enabled: cdktf.booleanToTerraform(this._privateLinkEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_tier: cdktf.stringToTerraform(this._skuTier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      addon_profile: cdktf.listMapper(kubernetesClusterAddonProfileToTerraform)(this._addonProfile),
      auto_scaler_profile: cdktf.listMapper(kubernetesClusterAutoScalerProfileToTerraform)(this._autoScalerProfile),
      default_node_pool: cdktf.listMapper(kubernetesClusterDefaultNodePoolToTerraform)(this._defaultNodePool),
      identity: cdktf.listMapper(kubernetesClusterIdentityToTerraform)(this._identity),
      kubelet_identity: cdktf.listMapper(kubernetesClusterKubeletIdentityToTerraform)(this._kubeletIdentity),
      linux_profile: cdktf.listMapper(kubernetesClusterLinuxProfileToTerraform)(this._linuxProfile),
      network_profile: cdktf.listMapper(kubernetesClusterNetworkProfileToTerraform)(this._networkProfile),
      role_based_access_control: cdktf.listMapper(kubernetesClusterRoleBasedAccessControlToTerraform)(this._roleBasedAccessControl),
      service_principal: cdktf.listMapper(kubernetesClusterServicePrincipalToTerraform)(this._servicePrincipal),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts),
      windows_profile: cdktf.listMapper(kubernetesClusterWindowsProfileToTerraform)(this._windowsProfile),
    };
  }
}
