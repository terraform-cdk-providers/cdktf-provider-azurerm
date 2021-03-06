// https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterSubscriptionPricingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#resource_type SecurityCenterSubscriptionPricing#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#tier SecurityCenterSubscriptionPricing#tier}
  */
  readonly tier: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#timeouts SecurityCenterSubscriptionPricing#timeouts}
  */
  readonly timeouts?: SecurityCenterSubscriptionPricingTimeouts;
}
export interface SecurityCenterSubscriptionPricingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#create SecurityCenterSubscriptionPricing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#delete SecurityCenterSubscriptionPricing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#read SecurityCenterSubscriptionPricing#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html#update SecurityCenterSubscriptionPricing#update}
  */
  readonly update?: string;
}

function securityCenterSubscriptionPricingTimeoutsToTerraform(struct?: SecurityCenterSubscriptionPricingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html azurerm_security_center_subscription_pricing}
*/
export class SecurityCenterSubscriptionPricing extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_subscription_pricing.html azurerm_security_center_subscription_pricing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterSubscriptionPricingConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterSubscriptionPricingConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_subscription_pricing',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceType = config.resourceType;
    this._tier = config.tier;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string;
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string ) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
  }

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterSubscriptionPricingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterSubscriptionPricingTimeouts ) {
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
      resource_type: cdktf.stringToTerraform(this._resourceType),
      tier: cdktf.stringToTerraform(this._tier),
      timeouts: securityCenterSubscriptionPricingTimeoutsToTerraform(this._timeouts),
    };
  }
}
