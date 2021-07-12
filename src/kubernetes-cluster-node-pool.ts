// https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#availability_zones KubernetesClusterNodePool#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#enable_auto_scaling KubernetesClusterNodePool#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#enable_host_encryption KubernetesClusterNodePool#enable_host_encryption}
  */
  readonly enableHostEncryption?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#enable_node_public_ip KubernetesClusterNodePool#enable_node_public_ip}
  */
  readonly enableNodePublicIp?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#eviction_policy KubernetesClusterNodePool#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#fips_enabled KubernetesClusterNodePool#fips_enabled}
  */
  readonly fipsEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#kubelet_disk_type KubernetesClusterNodePool#kubelet_disk_type}
  */
  readonly kubeletDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#kubernetes_cluster_id KubernetesClusterNodePool#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#max_count KubernetesClusterNodePool#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#max_pods KubernetesClusterNodePool#max_pods}
  */
  readonly maxPods?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#min_count KubernetesClusterNodePool#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#mode KubernetesClusterNodePool#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#name KubernetesClusterNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#node_count KubernetesClusterNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#node_labels KubernetesClusterNodePool#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#node_public_ip_prefix_id KubernetesClusterNodePool#node_public_ip_prefix_id}
  */
  readonly nodePublicIpPrefixId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#node_taints KubernetesClusterNodePool#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#orchestrator_version KubernetesClusterNodePool#orchestrator_version}
  */
  readonly orchestratorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#os_disk_size_gb KubernetesClusterNodePool#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#os_disk_type KubernetesClusterNodePool#os_disk_type}
  */
  readonly osDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#os_type KubernetesClusterNodePool#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#priority KubernetesClusterNodePool#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#proximity_placement_group_id KubernetesClusterNodePool#proximity_placement_group_id}
  */
  readonly proximityPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#spot_max_price KubernetesClusterNodePool#spot_max_price}
  */
  readonly spotMaxPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#tags KubernetesClusterNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#vm_size KubernetesClusterNodePool#vm_size}
  */
  readonly vmSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#vnet_subnet_id KubernetesClusterNodePool#vnet_subnet_id}
  */
  readonly vnetSubnetId?: string;
  /**
  * kubelet_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#kubelet_config KubernetesClusterNodePool#kubelet_config}
  */
  readonly kubeletConfig?: KubernetesClusterNodePoolKubeletConfig[];
  /**
  * linux_os_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#linux_os_config KubernetesClusterNodePool#linux_os_config}
  */
  readonly linuxOsConfig?: KubernetesClusterNodePoolLinuxOsConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#timeouts KubernetesClusterNodePool#timeouts}
  */
  readonly timeouts?: KubernetesClusterNodePoolTimeouts;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#upgrade_settings KubernetesClusterNodePool#upgrade_settings}
  */
  readonly upgradeSettings?: KubernetesClusterNodePoolUpgradeSettings[];
}
export interface KubernetesClusterNodePoolKubeletConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#allowed_unsafe_sysctls KubernetesClusterNodePool#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#container_log_max_line KubernetesClusterNodePool#container_log_max_line}
  */
  readonly containerLogMaxLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#container_log_max_size_mb KubernetesClusterNodePool#container_log_max_size_mb}
  */
  readonly containerLogMaxSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#cpu_cfs_quota_enabled KubernetesClusterNodePool#cpu_cfs_quota_enabled}
  */
  readonly cpuCfsQuotaEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#cpu_cfs_quota_period KubernetesClusterNodePool#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#cpu_manager_policy KubernetesClusterNodePool#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#image_gc_high_threshold KubernetesClusterNodePool#image_gc_high_threshold}
  */
  readonly imageGcHighThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#image_gc_low_threshold KubernetesClusterNodePool#image_gc_low_threshold}
  */
  readonly imageGcLowThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#pod_max_pid KubernetesClusterNodePool#pod_max_pid}
  */
  readonly podMaxPid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#topology_manager_policy KubernetesClusterNodePool#topology_manager_policy}
  */
  readonly topologyManagerPolicy?: string;
}

function kubernetesClusterNodePoolKubeletConfigToTerraform(struct?: KubernetesClusterNodePoolKubeletConfig): any {
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

export interface KubernetesClusterNodePoolLinuxOsConfigSysctlConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#fs_aio_max_nr KubernetesClusterNodePool#fs_aio_max_nr}
  */
  readonly fsAioMaxNr?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#fs_file_max KubernetesClusterNodePool#fs_file_max}
  */
  readonly fsFileMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#fs_inotify_max_user_watches KubernetesClusterNodePool#fs_inotify_max_user_watches}
  */
  readonly fsInotifyMaxUserWatches?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#fs_nr_open KubernetesClusterNodePool#fs_nr_open}
  */
  readonly fsNrOpen?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#kernel_threads_max KubernetesClusterNodePool#kernel_threads_max}
  */
  readonly kernelThreadsMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_netdev_max_backlog KubernetesClusterNodePool#net_core_netdev_max_backlog}
  */
  readonly netCoreNetdevMaxBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_optmem_max KubernetesClusterNodePool#net_core_optmem_max}
  */
  readonly netCoreOptmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_rmem_default KubernetesClusterNodePool#net_core_rmem_default}
  */
  readonly netCoreRmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_rmem_max KubernetesClusterNodePool#net_core_rmem_max}
  */
  readonly netCoreRmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_somaxconn KubernetesClusterNodePool#net_core_somaxconn}
  */
  readonly netCoreSomaxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_wmem_default KubernetesClusterNodePool#net_core_wmem_default}
  */
  readonly netCoreWmemDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_core_wmem_max KubernetesClusterNodePool#net_core_wmem_max}
  */
  readonly netCoreWmemMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_ip_local_port_range_max KubernetesClusterNodePool#net_ipv4_ip_local_port_range_max}
  */
  readonly netIpv4IpLocalPortRangeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_ip_local_port_range_min KubernetesClusterNodePool#net_ipv4_ip_local_port_range_min}
  */
  readonly netIpv4IpLocalPortRangeMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_neigh_default_gc_thresh1 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh1}
  */
  readonly netIpv4NeighDefaultGcThresh1?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_neigh_default_gc_thresh2 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh2}
  */
  readonly netIpv4NeighDefaultGcThresh2?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_neigh_default_gc_thresh3 KubernetesClusterNodePool#net_ipv4_neigh_default_gc_thresh3}
  */
  readonly netIpv4NeighDefaultGcThresh3?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_fin_timeout KubernetesClusterNodePool#net_ipv4_tcp_fin_timeout}
  */
  readonly netIpv4TcpFinTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_keepalive_intvl KubernetesClusterNodePool#net_ipv4_tcp_keepalive_intvl}
  */
  readonly netIpv4TcpKeepaliveIntvl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_keepalive_probes KubernetesClusterNodePool#net_ipv4_tcp_keepalive_probes}
  */
  readonly netIpv4TcpKeepaliveProbes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_keepalive_time KubernetesClusterNodePool#net_ipv4_tcp_keepalive_time}
  */
  readonly netIpv4TcpKeepaliveTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_max_syn_backlog KubernetesClusterNodePool#net_ipv4_tcp_max_syn_backlog}
  */
  readonly netIpv4TcpMaxSynBacklog?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_max_tw_buckets KubernetesClusterNodePool#net_ipv4_tcp_max_tw_buckets}
  */
  readonly netIpv4TcpMaxTwBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_ipv4_tcp_tw_reuse KubernetesClusterNodePool#net_ipv4_tcp_tw_reuse}
  */
  readonly netIpv4TcpTwReuse?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_netfilter_nf_conntrack_buckets KubernetesClusterNodePool#net_netfilter_nf_conntrack_buckets}
  */
  readonly netNetfilterNfConntrackBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#net_netfilter_nf_conntrack_max KubernetesClusterNodePool#net_netfilter_nf_conntrack_max}
  */
  readonly netNetfilterNfConntrackMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#vm_max_map_count KubernetesClusterNodePool#vm_max_map_count}
  */
  readonly vmMaxMapCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#vm_swappiness KubernetesClusterNodePool#vm_swappiness}
  */
  readonly vmSwappiness?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#vm_vfs_cache_pressure KubernetesClusterNodePool#vm_vfs_cache_pressure}
  */
  readonly vmVfsCachePressure?: number;
}

function kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig): any {
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

export interface KubernetesClusterNodePoolLinuxOsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#swap_file_size_mb KubernetesClusterNodePool#swap_file_size_mb}
  */
  readonly swapFileSizeMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#transparent_huge_page_defrag KubernetesClusterNodePool#transparent_huge_page_defrag}
  */
  readonly transparentHugePageDefrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#transparent_huge_page_enabled KubernetesClusterNodePool#transparent_huge_page_enabled}
  */
  readonly transparentHugePageEnabled?: string;
  /**
  * sysctl_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#sysctl_config KubernetesClusterNodePool#sysctl_config}
  */
  readonly sysctlConfig?: KubernetesClusterNodePoolLinuxOsConfigSysctlConfig[];
}

function kubernetesClusterNodePoolLinuxOsConfigToTerraform(struct?: KubernetesClusterNodePoolLinuxOsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    swap_file_size_mb: cdktf.numberToTerraform(struct!.swapFileSizeMb),
    transparent_huge_page_defrag: cdktf.stringToTerraform(struct!.transparentHugePageDefrag),
    transparent_huge_page_enabled: cdktf.stringToTerraform(struct!.transparentHugePageEnabled),
    sysctl_config: cdktf.listMapper(kubernetesClusterNodePoolLinuxOsConfigSysctlConfigToTerraform)(struct!.sysctlConfig),
  }
}

export interface KubernetesClusterNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#create KubernetesClusterNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#delete KubernetesClusterNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#read KubernetesClusterNodePool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#update KubernetesClusterNodePool#update}
  */
  readonly update?: string;
}

function kubernetesClusterNodePoolTimeoutsToTerraform(struct?: KubernetesClusterNodePoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface KubernetesClusterNodePoolUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html#max_surge KubernetesClusterNodePool#max_surge}
  */
  readonly maxSurge: string;
}

function kubernetesClusterNodePoolUpgradeSettingsToTerraform(struct?: KubernetesClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html azurerm_kubernetes_cluster_node_pool}
*/
export class KubernetesClusterNodePool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/kubernetes_cluster_node_pool.html azurerm_kubernetes_cluster_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._enableAutoScaling = config.enableAutoScaling;
    this._enableHostEncryption = config.enableHostEncryption;
    this._enableNodePublicIp = config.enableNodePublicIp;
    this._evictionPolicy = config.evictionPolicy;
    this._fipsEnabled = config.fipsEnabled;
    this._kubeletDiskType = config.kubeletDiskType;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._maxCount = config.maxCount;
    this._maxPods = config.maxPods;
    this._minCount = config.minCount;
    this._mode = config.mode;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeLabels = config.nodeLabels;
    this._nodePublicIpPrefixId = config.nodePublicIpPrefixId;
    this._nodeTaints = config.nodeTaints;
    this._orchestratorVersion = config.orchestratorVersion;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osDiskType = config.osDiskType;
    this._osType = config.osType;
    this._priority = config.priority;
    this._proximityPlacementGroupId = config.proximityPlacementGroupId;
    this._spotMaxPrice = config.spotMaxPrice;
    this._tags = config.tags;
    this._vmSize = config.vmSize;
    this._vnetSubnetId = config.vnetSubnetId;
    this._kubeletConfig = config.kubeletConfig;
    this._linuxOsConfig = config.linuxOsConfig;
    this._timeouts = config.timeouts;
    this._upgradeSettings = config.upgradeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] ) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean;
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean ) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling
  }

  // enable_host_encryption - computed: false, optional: true, required: false
  private _enableHostEncryption?: boolean;
  public get enableHostEncryption() {
    return this.getBooleanAttribute('enable_host_encryption');
  }
  public set enableHostEncryption(value: boolean ) {
    this._enableHostEncryption = value;
  }
  public resetEnableHostEncryption() {
    this._enableHostEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHostEncryptionInput() {
    return this._enableHostEncryption
  }

  // enable_node_public_ip - computed: false, optional: true, required: false
  private _enableNodePublicIp?: boolean;
  public get enableNodePublicIp() {
    return this.getBooleanAttribute('enable_node_public_ip');
  }
  public set enableNodePublicIp(value: boolean ) {
    this._enableNodePublicIp = value;
  }
  public resetEnableNodePublicIp() {
    this._enableNodePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodePublicIpInput() {
    return this._enableNodePublicIp
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

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean;
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean ) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubelet_disk_type - computed: true, optional: true, required: false
  private _kubeletDiskType?: string;
  public get kubeletDiskType() {
    return this.getStringAttribute('kubelet_disk_type');
  }
  public set kubeletDiskType(value: string) {
    this._kubeletDiskType = value;
  }
  public resetKubeletDiskType() {
    this._kubeletDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletDiskTypeInput() {
    return this._kubeletDiskType
  }

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId: string;
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number;
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number ) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount
  }

  // max_pods - computed: true, optional: true, required: false
  private _maxPods?: number;
  public get maxPods() {
    return this.getNumberAttribute('max_pods');
  }
  public set maxPods(value: number) {
    this._maxPods = value;
  }
  public resetMaxPods() {
    this._maxPods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsInput() {
    return this._maxPods
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number;
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number ) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string;
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string ) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
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

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string };
  public get nodeLabels() {
    return this.interpolationForAttribute('node_labels') as any;
  }
  public set nodeLabels(value: { [key: string]: string } ) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels
  }

  // node_public_ip_prefix_id - computed: false, optional: true, required: false
  private _nodePublicIpPrefixId?: string;
  public get nodePublicIpPrefixId() {
    return this.getStringAttribute('node_public_ip_prefix_id');
  }
  public set nodePublicIpPrefixId(value: string ) {
    this._nodePublicIpPrefixId = value;
  }
  public resetNodePublicIpPrefixId() {
    this._nodePublicIpPrefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicIpPrefixIdInput() {
    return this._nodePublicIpPrefixId
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints?: string[];
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[] ) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints
  }

  // orchestrator_version - computed: true, optional: true, required: false
  private _orchestratorVersion?: string;
  public get orchestratorVersion() {
    return this.getStringAttribute('orchestrator_version');
  }
  public set orchestratorVersion(value: string) {
    this._orchestratorVersion = value;
  }
  public resetOrchestratorVersion() {
    this._orchestratorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorVersionInput() {
    return this._orchestratorVersion
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number;
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb
  }

  // os_disk_type - computed: false, optional: true, required: false
  private _osDiskType?: string;
  public get osDiskType() {
    return this.getStringAttribute('os_disk_type');
  }
  public set osDiskType(value: string ) {
    this._osDiskType = value;
  }
  public resetOsDiskType() {
    this._osDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskTypeInput() {
    return this._osDiskType
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string;
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string ) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType
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

  // spot_max_price - computed: false, optional: true, required: false
  private _spotMaxPrice?: number;
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number ) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // vnet_subnet_id - computed: false, optional: true, required: false
  private _vnetSubnetId?: string;
  public get vnetSubnetId() {
    return this.getStringAttribute('vnet_subnet_id');
  }
  public set vnetSubnetId(value: string ) {
    this._vnetSubnetId = value;
  }
  public resetVnetSubnetId() {
    this._vnetSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetIdInput() {
    return this._vnetSubnetId
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig?: KubernetesClusterNodePoolKubeletConfig[];
  public get kubeletConfig() {
    return this.interpolationForAttribute('kubelet_config') as any;
  }
  public set kubeletConfig(value: KubernetesClusterNodePoolKubeletConfig[] ) {
    this._kubeletConfig = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig
  }

  // linux_os_config - computed: false, optional: true, required: false
  private _linuxOsConfig?: KubernetesClusterNodePoolLinuxOsConfig[];
  public get linuxOsConfig() {
    return this.interpolationForAttribute('linux_os_config') as any;
  }
  public set linuxOsConfig(value: KubernetesClusterNodePoolLinuxOsConfig[] ) {
    this._linuxOsConfig = value;
  }
  public resetLinuxOsConfig() {
    this._linuxOsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxOsConfigInput() {
    return this._linuxOsConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KubernetesClusterNodePoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: KubernetesClusterNodePoolTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings?: KubernetesClusterNodePoolUpgradeSettings[];
  public get upgradeSettings() {
    return this.interpolationForAttribute('upgrade_settings') as any;
  }
  public set upgradeSettings(value: KubernetesClusterNodePoolUpgradeSettings[] ) {
    this._upgradeSettings = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
      enable_auto_scaling: cdktf.booleanToTerraform(this._enableAutoScaling),
      enable_host_encryption: cdktf.booleanToTerraform(this._enableHostEncryption),
      enable_node_public_ip: cdktf.booleanToTerraform(this._enableNodePublicIp),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      kubelet_disk_type: cdktf.stringToTerraform(this._kubeletDiskType),
      kubernetes_cluster_id: cdktf.stringToTerraform(this._kubernetesClusterId),
      max_count: cdktf.numberToTerraform(this._maxCount),
      max_pods: cdktf.numberToTerraform(this._maxPods),
      min_count: cdktf.numberToTerraform(this._minCount),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._nodeLabels),
      node_public_ip_prefix_id: cdktf.stringToTerraform(this._nodePublicIpPrefixId),
      node_taints: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeTaints),
      orchestrator_version: cdktf.stringToTerraform(this._orchestratorVersion),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_disk_type: cdktf.stringToTerraform(this._osDiskType),
      os_type: cdktf.stringToTerraform(this._osType),
      priority: cdktf.stringToTerraform(this._priority),
      proximity_placement_group_id: cdktf.stringToTerraform(this._proximityPlacementGroupId),
      spot_max_price: cdktf.numberToTerraform(this._spotMaxPrice),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      vnet_subnet_id: cdktf.stringToTerraform(this._vnetSubnetId),
      kubelet_config: cdktf.listMapper(kubernetesClusterNodePoolKubeletConfigToTerraform)(this._kubeletConfig),
      linux_os_config: cdktf.listMapper(kubernetesClusterNodePoolLinuxOsConfigToTerraform)(this._linuxOsConfig),
      timeouts: kubernetesClusterNodePoolTimeoutsToTerraform(this._timeouts),
      upgrade_settings: cdktf.listMapper(kubernetesClusterNodePoolUpgradeSettingsToTerraform)(this._upgradeSettings),
    };
  }
}
