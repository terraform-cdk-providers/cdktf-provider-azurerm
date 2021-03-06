// https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#base_policy_id FirewallPolicy#base_policy_id}
  */
  readonly basePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#location FirewallPolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#name FirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#resource_group_name FirewallPolicy#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#sku FirewallPolicy#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#tags FirewallPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#threat_intelligence_mode FirewallPolicy#threat_intelligence_mode}
  */
  readonly threatIntelligenceMode?: string;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#dns FirewallPolicy#dns}
  */
  readonly dns?: FirewallPolicyDns[];
  /**
  * threat_intelligence_allowlist block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#threat_intelligence_allowlist FirewallPolicy#threat_intelligence_allowlist}
  */
  readonly threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#timeouts FirewallPolicy#timeouts}
  */
  readonly timeouts?: FirewallPolicyTimeouts;
}
export interface FirewallPolicyDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#network_rule_fqdn_enabled FirewallPolicy#network_rule_fqdn_enabled}
  */
  readonly networkRuleFqdnEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#proxy_enabled FirewallPolicy#proxy_enabled}
  */
  readonly proxyEnabled?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#servers FirewallPolicy#servers}
  */
  readonly servers?: string[];
}

function firewallPolicyDnsToTerraform(struct?: FirewallPolicyDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    network_rule_fqdn_enabled: cdktf.booleanToTerraform(struct!.networkRuleFqdnEnabled),
    proxy_enabled: cdktf.booleanToTerraform(struct!.proxyEnabled),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
  }
}

export interface FirewallPolicyThreatIntelligenceAllowlist {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#fqdns FirewallPolicy#fqdns}
  */
  readonly fqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#ip_addresses FirewallPolicy#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

function firewallPolicyThreatIntelligenceAllowlistToTerraform(struct?: FirewallPolicyThreatIntelligenceAllowlist): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.fqdns),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
  }
}

export interface FirewallPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#create FirewallPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#delete FirewallPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#read FirewallPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html#update FirewallPolicy#update}
  */
  readonly update?: string;
}

function firewallPolicyTimeoutsToTerraform(struct?: FirewallPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html azurerm_firewall_policy}
*/
export class FirewallPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_policy.html azurerm_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._basePolicyId = config.basePolicyId;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._tags = config.tags;
    this._threatIntelligenceMode = config.threatIntelligenceMode;
    this._dns = config.dns;
    this._threatIntelligenceAllowlist = config.threatIntelligenceAllowlist;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_policy_id - computed: false, optional: true, required: false
  private _basePolicyId?: string;
  public get basePolicyId() {
    return this.getStringAttribute('base_policy_id');
  }
  public set basePolicyId(value: string ) {
    this._basePolicyId = value;
  }
  public resetBasePolicyId() {
    this._basePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePolicyIdInput() {
    return this._basePolicyId
  }

  // child_policies - computed: true, optional: false, required: false
  public get childPolicies() {
    return this.getListAttribute('child_policies');
  }

  // firewalls - computed: true, optional: false, required: false
  public get firewalls() {
    return this.getListAttribute('firewalls');
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

  // rule_collection_groups - computed: true, optional: false, required: false
  public get ruleCollectionGroups() {
    return this.getListAttribute('rule_collection_groups');
  }

  // sku - computed: true, optional: true, required: false
  private _sku?: string;
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
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

  // threat_intelligence_mode - computed: false, optional: true, required: false
  private _threatIntelligenceMode?: string;
  public get threatIntelligenceMode() {
    return this.getStringAttribute('threat_intelligence_mode');
  }
  public set threatIntelligenceMode(value: string ) {
    this._threatIntelligenceMode = value;
  }
  public resetThreatIntelligenceMode() {
    this._threatIntelligenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceModeInput() {
    return this._threatIntelligenceMode
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: FirewallPolicyDns[];
  public get dns() {
    return this.interpolationForAttribute('dns') as any;
  }
  public set dns(value: FirewallPolicyDns[] ) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }

  // threat_intelligence_allowlist - computed: false, optional: true, required: false
  private _threatIntelligenceAllowlist?: FirewallPolicyThreatIntelligenceAllowlist[];
  public get threatIntelligenceAllowlist() {
    return this.interpolationForAttribute('threat_intelligence_allowlist') as any;
  }
  public set threatIntelligenceAllowlist(value: FirewallPolicyThreatIntelligenceAllowlist[] ) {
    this._threatIntelligenceAllowlist = value;
  }
  public resetThreatIntelligenceAllowlist() {
    this._threatIntelligenceAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatIntelligenceAllowlistInput() {
    return this._threatIntelligenceAllowlist
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallPolicyTimeouts ) {
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
      base_policy_id: cdktf.stringToTerraform(this._basePolicyId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      threat_intelligence_mode: cdktf.stringToTerraform(this._threatIntelligenceMode),
      dns: cdktf.listMapper(firewallPolicyDnsToTerraform)(this._dns),
      threat_intelligence_allowlist: cdktf.listMapper(firewallPolicyThreatIntelligenceAllowlistToTerraform)(this._threatIntelligenceAllowlist),
      timeouts: firewallPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
